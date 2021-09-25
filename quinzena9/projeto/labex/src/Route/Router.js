import AdminHomePage from "../Pages/AdminHomePage"
import { AplicationFormPage } from "../Pages/AplicationFormPage"
import { CreateTripPage } from "../Pages/CreateTripPage"
import { ListTripsPage } from "../Pages/ListTripsPage"
import { LoginPage } from "../Pages/LoginPage"
import { TripDetailsPage } from "../Pages/TripDetailsPage"
import { HomePage } from "../Pages/HomePage"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useState } from "react"


export const Router = ({ children }) => {
    const [userToken, setUserToken] = useState(null)
    const isUserLoggedIn = Boolean(userToken)
    return (
        <BrowserRouter>

            {children(userToken)}
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/admin/home"}
                    render={() => isUserLoggedIn === true
                        ? <AdminHomePage />
                        : <Redirect to={{ pathname: '/login' }} />}
                />
            </Switch>
            <Switch>
                <Route exact path={"/trips/aplication"}>
                    <AplicationFormPage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/admin/trips/create"}
                    render={() => isUserLoggedIn === true
                        ? <CreateTripPage />
                        : <Redirect to={{ pathname: '/login' }} />}
                />
            </Switch>
            <Switch>
                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>
            </Switch>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage setUserToken={setUserToken} />
                     
                </Route>
            </Switch>
            <Switch>
                <Route exact path={`/admin/trips/:id`}
                    render={() => isUserLoggedIn === true
                        ? <TripDetailsPage />
                        : <Redirect to={{ pathname: '/login' }} />}
                />
            </Switch>             
              
        </BrowserRouter >
    )
}

