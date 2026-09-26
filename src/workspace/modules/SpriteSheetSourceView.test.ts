import { afterEach, describe, expect, it, vi } from 'vitest';
import type { LocalImageSelection } from '../../platform/contracts/ILocalImagePicker';
import { SpriteSheetSourceView } from './SpriteSheetSourceView';

class FakeElement extends EventTarget {
  public className = '';
  public textContent = '';
  public type = '';
  public alt = '';
  public hidden = false;
  public disabled = false;
  public src = '';
  public readonly children: FakeElement[] = [];

  public append(...elements: FakeElement[]): void {
    this.children.push(...elements);
  }

  public removeAttribute(name: string): void {
    if (name === 'src') this.src = '';
  }
}

const document = {
  createElement: () => new FakeElement(),
} as unknown as Document;

function createSelection(): LocalImageSelection {
  return {
    path: 'C:\\games\\sprites\\hero.png',
    name: 'hero.png',
    bytes: new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('SpriteSheetSourceView', () => {
  it('decodes a selected local image and revokes its preview on disposal', async () => {
    const close = vi.fn();
    vi.stubGlobal('createImageBitmap', vi.fn(async () => ({ width: 128, height: 64, close })));
    const createUrl = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:local-sprite');
    const revokeUrl = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => undefined);
    const onReady = vi.fn();
    const view = new SpriteSheetSourceView({
      chooseSource: async () => createSelection(),
      onReady,
      onError: vi.fn(),
    });
    const picker = view.createPicker(document) as unknown as FakeElement;
    const image = view.createImage(document) as unknown as FakeElement;

    picker.children[0]!.dispatchEvent(new Event('click'));
    await vi.waitFor(() => expect(onReady).toHaveBeenCalledOnce());

    expect(onReady).toHaveBeenCalledWith(createSelection(), 128, 64);
    expect(picker.children[1]!.textContent).toBe('hero.png · 128 × 64');
    expect(picker.children[2]!.textContent).toContain('hero.png');
    expect(image.src).toBe('blob:local-sprite');
    expect(image.hidden).toBe(false);
    expect(createUrl).toHaveBeenCalledOnce();
    expect(close).toHaveBeenCalledOnce();

    view.dispose();

    expect(revokeUrl).toHaveBeenCalledWith('blob:local-sprite');
    expect(image.src).toBe('');
  });

  it('keeps the current state unchanged when the native dialog is canceled', async () => {
    const onReady = vi.fn();
    const view = new SpriteSheetSourceView({
      chooseSource: async () => null,
      onReady,
      onError: vi.fn(),
    });
    const picker = view.createPicker(document) as unknown as FakeElement;

    picker.children[0]!.dispatchEvent(new Event('click'));
    await vi.waitFor(() => expect(picker.children[0]!.disabled).toBe(false));

    expect(onReady).not.toHaveBeenCalled();
    expect(picker.children[1]!.textContent).toBe('No image selected');
    view.dispose();
  });
});
