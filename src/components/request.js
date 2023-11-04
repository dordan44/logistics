import styles from "@/app/page.module.css";
import CheckIcon from "@/components/icons/check";
import RequestItem from "./requestItem";

export default function Request({request}) {
  const handleCompleted = (id) => {
    fetch('https://api.bandwatch.co.il/requests/close', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
      })
  }
  return (
    <div className={styles.card}>
      {request.status}
      <span className={styles.subtitle}>
        חמ״ל: <span className={styles.text}>{request.room}</span>
      </span>
      <div className={styles.items}>
        <span className={styles["items-title"]}>פריטים:</span>
        {request.items && request.items.map(item => <RequestItem item={item} key={item._id}/>)}
      </div>
      <CheckIcon onClick={() => handleCompleted(request._id)}/>
    </div>
  );
}
