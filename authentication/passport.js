import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcryptjs";
import db from "../db/queries.js";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

passport.use(
  new LocalStrategy({ session: false }, async (username, password, done) => {
    try {
      const user = await db.getAdmin(username);
      console.log(user);
      console.log(username, password);
      if (!user) {
        return done(null, false, { message: "Not admin" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Wrong password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

const cookieExtractor = (req) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies["token"];
  }

  return jwt;
};

passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: cookieExtractor,
    },
    async (payload, done) => {
      try {
        done(null, payload);
      } catch (err) {
        done(err);
      }
    }
  )
);
