import { AlertsProps } from "../../@types/client"
import { uniqueId } from "../../utils"
import "./Alerts.scss"

function Alerts({ alerts }: AlertsProps) {
  return (
    <div className="c-alerts">
      {alerts.map((alert) => {
        return (
          <span key={alert.id} className="c-alerts__alert">{alert.text}</span>
        )
      })}
    </div>
  )
}

export default Alerts