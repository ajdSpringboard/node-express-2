1. `PATCH /users/:username` route had requireAdmin middleware, but also checked for admin in the route logic. Removed the middleware.

2. `PATCH /users/:username` route also allowed admin status to be edited. Changed it to return 401 if trying to edit 'admin'.

3. `DELETE /users/:username`: the User.delete method wasn't being awaited. Added 'await' keyword since it is asynchronous.

4. `POST /login` route didn't await User.authenticate method. Added 'await' keyword.

5. authUser middleware was using jwt.decode instead of jwt.verify.