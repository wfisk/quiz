import { get } from "svelte/store";

import { wrap as routeWrap } from "svelte-spa-router";

import route__media_item from "src/routes/media-item.svelte";
import route__not_found from "src/routes/not-found.svelte";
import route__question from "src/routes/question.svelte";
import route__quiz from "src/routes/quiz.svelte";
import route__quizzes from "src/routes/quizzes.svelte";
import route__session from "src/routes/session.svelte";
import { loggedIn } from "src/services/firebase";

const routes = {
  // Exact path
  "/": routeWrap({
    component: route__quizzes,
    conditions: () => get(loggedIn),
  }),
  "/quizzes/:quizId/questions/:questionId/media-items/:mediaItemId": routeWrap({
    component: route__media_item,
    conditions: () => get(loggedIn),
  }),
  "/quizzes/:quizId/questions/:questionId": routeWrap({
    component: route__question,
    conditions: () => get(loggedIn),
  }),
  "/quizzes/:quizId": route__quiz,
  "/quizzes": routeWrap({
    component: route__quizzes,
    conditions: () => get(loggedIn),
  }),
  "/session": route__session,
  "*": route__not_found,
};

export default routes;
