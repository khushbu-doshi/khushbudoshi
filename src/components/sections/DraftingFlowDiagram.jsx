const steps = [
  {
    label: 'Finding templates',
    tool: 'Outlook + SharePoint',
    pain: 'Templates scattered across folders. Keyword search is unreliable.',
  },
  {
    label: 'Checking bills, news & position',
    tool: 'Google Search',
    pain: 'Leaves the draft entirely. No way to bring findings back in.',
  },
  {
    label: 'Flagging out-of-scope promises',
    tool: 'Manual proofreading',
    pain: 'No guardrails. Relies on LC remembering what to check.',
  },
  {
    label: 'Routing draft for feedback',
    tool: 'Slack + Outlook',
    pain: 'Drafts, feedback and status live across multiple threads.',
  },
  {
    label: 'Getting sign-off',
    tool: 'Slack + Outlook',
    pain: 'Approval is informal. No audit trail or collaboration layer.',
  },
]

const LABEL_W = 'w-[110px] shrink-0'

export default function DraftingFlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[760px] flex flex-col gap-0">

        {/* Row 1 — Steps */}
        <div className="flex items-center gap-3 mb-4">
          {/* Left label */}
          <div className={`${LABEL_W} flex items-center`}>
            <span className="font-body text-[11px] font-medium text-foreground bg-foreground/8 border border-foreground/15 rounded-[8px] px-3 py-2 w-full text-center leading-tight">
              Steps
            </span>
          </div>
          {/* Step boxes */}
          <div className="flex items-center gap-0 flex-1">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1 min-w-0">
                <div className="flex-1 bg-foreground text-background rounded-[12px] px-2 py-1.5 text-center h-[64px] flex items-center justify-center">
                  <p className="font-body font-medium text-[13px] leading-[18px]">
                    {step.label}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="shrink-0 px-1.5">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M0 6H14M10 1L15 6L10 11" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Tools */}
        <div className="flex items-center gap-3 mb-4">
          {/* Left label */}
          <div className={`${LABEL_W} flex items-start pt-0.5`}>
            <span className="font-body text-[11px] text-muted w-full text-center leading-tight">
              Tools used
            </span>
          </div>
          {/* Tool names */}
          <div className="flex flex-1 gap-0">
            {steps.map((step, i) => (
              <div key={step.tool + i} className="flex-1 text-center px-1.5">
                <p className="font-body text-[11px] text-muted leading-[16px]">{step.tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex gap-3 mb-4">
          <div className={LABEL_W} />
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Row 3 — Pain points */}
        <div className="flex items-start gap-3">
          {/* Left label box */}
          <div className={`${LABEL_W} flex items-start`}>
            <span className="font-body text-[11px] font-medium text-[#b85c00] bg-[#fff3e8] border border-[#f5c49a] rounded-[8px] px-3 py-2 w-full text-center leading-tight">
              Pain points
            </span>
          </div>
          {/* Pain point cards */}
          <div className="flex gap-3 flex-1">
            {steps.map((step) => (
              <div
                key={step.pain}
                className="flex-1 bg-[#fff3e8] border border-[#f5c49a]/60 rounded-[12px] p-4"
              >
                <p className="font-body text-[13px] text-[#b85c00] leading-[18px]">
                  {step.pain}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
