import { Outlet } from "react-router-dom"
import style from "./MainLayout.module.scss"



export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <div className={style.contentwrapper}>
                <div className={style.content}>
                    <Outlet/>
                </div>

            </div>

        </main>
    )
}