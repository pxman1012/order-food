'use client'

import { shallow } from "zustand/shallow";
import styles from "./page.module.css";
import useCounterStore from "@/store/counterStore";

export default function Home() {

    // // Dễ viết, nhanh gọn.	><  Re-render mỗi khi bất kỳ thứ gì trong state đổi.
    // const { count, increase, decrease, reset } =useCounterStore(
    //     (state) => state
    // );

    // Cực tối ưu render.  ><	Phải viết nhiều dòng.
    const count = useCounterStore((state) => state.count);
    const increase = useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);
    const reset = useCounterStore((state) => state.reset);

    // Dễ quản lý, vẫn tối ưu tốt.  ><	Phải nhớ import shallow từ zustand.
    // const { count, increase, decrease, reset } = useCounterStore(
    //     (state) => ({
    //         count: state.count,
    //         increase: state.increase,
    //         decrease: state.decrease,
    //         reset: state.reset,
    //     }),
    //     shallow
    // );

    return (
        <div className={styles.page}>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>clear</button>
        </div>
    );
}
