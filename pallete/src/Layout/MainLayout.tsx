import { Outlet } from "react-router-dom"
import style from "./MainLayout.module.scss"



export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <div className={style.contentwrapper}>
                <div className={style.content}>
                    <h3>aæsfjæafj</h3>
                    <Outlet/>
                </div>

            </div>

        </main>
    )
}