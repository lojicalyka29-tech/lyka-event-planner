import { steps } from '../data/catalog'

function StepProgress({ step }) {
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>
          Step {step} of {steps.length}
        </span>
        <span>{steps[step - 1]}</span>
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${(step / steps.length) * 100}%` }} />
      </div>
    </div>
  )
}

export default StepProgress
