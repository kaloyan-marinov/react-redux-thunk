# Introduction

Start by reading:

- https://redux.js.org/advanced/middleware focusing on its (Attempt #5: Removing Monkeypatching) section
- https://www.codementor.io/@vkarpov/beginner-s-guide-to-redux-middleware-du107uyud

# `redux-thunk`

What follows has been gleaned from the following sources:

- https://daveceddia.com/redux-tutorial/ >> from "How to Setup Redux Thunk" onwards
- https://daveceddia.com/what-is-a-thunk/

A thunk is ... a special (and uncommon) name for a function that’s returned by another.

# So how does this apply to Redux?

Recall that:

- Redux [has] ... got a few main concepts: there are “actions”, “action creators”, “reducers”, and “middleware.”
- Actions are just objects. As far as Redux is concerned, out of the box actions must be _plain objects_, and they must have a `type` property.
- ... since it’s kind of annoying to write those objects by hand all the time (not to mention error-prone), Redux has the concept of “action creators” ... Instead of writing the action object yourself, you call the function, which returns the object.

Actions are Boring:

- Isn’t it kind of funny that Redux’s so-called “actions” don’t actually _do_ anything? They’re just objects.
- Wouldn’t it be cool if you could actually make them do something? Like, say, make an API call, or trigger other actions?
- (Since reducers are supposed to be “pure” (as in, they don’t change anything outside their scope) we can’t do any API calls or dispatch actions from inside a reducer.)
- If you want an action to _do_ something, that code needs to live inside a function. That function (the “thunk”) is a bundle of work to be done.
- It would be nice if an action creator could return that function – the bundle of work – instead of an action object.
- ... this is exactly what redux-thunk does: it is a _middleware_ that looks at every action that passes through the system, and if it’s a function, it calls that function. That’s all it does.

After you install redux-thunk in your project, and apply the middleware, every action you dispatch will pass through this bit of code. It calls actions that are functions (and returns whatever they return), and otherwise passes the action along to then next middleware, or to Redux itself (which is what `next(action)` does).
