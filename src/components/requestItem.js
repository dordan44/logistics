import styles from "@/app/page.module.css";

export default function RequestItem({item}) {
    return (
        <div className={styles.item}>
        <span className={styles["item-title"]}>{item.title}</span>
        <span className={styles["item-quantity"]}>X{item.quantity}</span>
      </div>
    )
}