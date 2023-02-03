import { AlertsProps } from "../../@types/client"
import { uniqueId } from "../../utils"
import "./Alerts.scss"

function Alerts({ alerts }: AlertsProps) {
  return (
    <div className="c-alerts">
      {alerts.map((alert) => {
        return (
          <span
            key={alert.id}
            className={alert.type && alert.type === "error" ? "c-alerts__alert -error" : "c-alerts__alert"}
          >
            {alert.text}
          </span>
        )
      })}
    </div>
  )
}

export default Alerts