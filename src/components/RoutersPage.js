import { Routes, Route } from "react-router-dom"
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import PollPage from "./PollPage";
import PollCreationPage from "./PollCreationPage";
import LeaderboardPage from "./LeaderboardPage";
import AuthRoute from "./AuthRoute";

const RoutersPage = () => {
    return (
        <Routes>
            <Route path="*" exact element={<AuthRoute />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route element={<AuthRoute />}>
                <Route path="/" exact element={<DashboardPage />} />
                <Route path="/questions/:id" exact element={<PollPage />} />
                <Route path="/add" exact element={<PollCreationPage />} />
                <Route path="/leaderboard" exact element={<LeaderboardPage />} />
            </Route>
        </Routes>
    );
}

export default RoutersPage