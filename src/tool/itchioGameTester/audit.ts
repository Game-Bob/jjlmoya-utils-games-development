import type { validateGameFiles, GameValidationIssue } from './logic';

function renderAuditIssue(i: GameValidationIssue): string {
  let bg = '#e0f2fe';
  let color = '#075985';
  if (i.type === 'error') { bg = '#fee2e2'; color = '#991b1b'; }
  else if (i.type === 'warning') { bg = '#fef9c3'; color = '#854d0e'; }
  const details = i.details ? `<p style="margin: 0.25rem 0 0 0; font-size: 0.85rem;">${i.details}</p>` : '';
  return `<div style="padding: 0.75rem; border-radius: 6px; background: ${bg}; color: ${color};"><strong>[${i.type.toUpperCase()}] ${i.message}</strong>${details}</div>`;
}

function renderBadge(score: number): string {
  if (score >= 90) return 'igt-audit-badge igt-badge-pass';
  if (score >= 60) return 'igt-audit-badge igt-badge-warn';
  return 'igt-audit-badge igt-badge-error';
}

function renderIssuesList(issuesList: HTMLElement, audit: ReturnType<typeof validateGameFiles>) {
  if (audit.issues.length === 0) {
    const r = document.getElementById('igt-root');
    const msg = r?.getAttribute('data-no-issues-found') || 'All checks passed!';
    issuesList.innerHTML = `<div class="igt-all-clear"><div class="igt-all-clear-icon"><svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="igt-all-clear-body"><strong>${msg}</strong><span>Score: ${audit.score}% &mdash; ${audit.totalFiles} files inspected</span></div></div>`;
  } else {
    issuesList.innerHTML = audit.issues.map(renderAuditIssue).join('');
  }
}

function getAuditI18n() {
  const r = document.getElementById('igt-root');
  return {
    engineLabel: r?.getAttribute('data-engine-detected') || 'Engine',
    scoreLabel: r?.getAttribute('data-compatibility-score') || 'Score',
    filesLabel: r?.getAttribute('data-files-inspected') || 'Files',
  };
}

export function displayAudit(audit: ReturnType<typeof validateGameFiles>) {
  const panel = document.getElementById('igt-results-panel');
  const engineTag = document.getElementById('igt-engine-tag');
  const scoreBadge = document.getElementById('igt-score-badge');
  const filesCount = document.getElementById('igt-files-count');
  const issuesList = document.getElementById('igt-issues-list');
  if (!panel || !engineTag || !scoreBadge || !filesCount || !issuesList) return;
  const i18n = getAuditI18n();
  panel.style.display = 'block';
  engineTag.textContent = `${i18n.engineLabel}: ${audit.engine}`;
  scoreBadge.textContent = `${i18n.scoreLabel}: ${audit.score}%`;
  scoreBadge.className = renderBadge(audit.score);
  filesCount.textContent = `${i18n.filesLabel}: ${audit.totalFiles}`;
  renderIssuesList(issuesList, audit);
}
