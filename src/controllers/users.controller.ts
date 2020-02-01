import { Request, Response } from "express";
import { User } from "../models";
import UserModule from "../modules/user/UserModule";
export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      console.log(`user.routes.get.allUsers - attempting to get all users`);
      const user = await new UserModule().fetchAll();
      return res.status(200).json({
        success: true,
        response: user
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
  static async getUserById(req: Request, res: Response) {
    try {
      console.log(`user.routes.get - attempting to get user (id: ${req.params.user_id})`);
      const user_id = req.params.user_id;
      if (!user_id) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request"
        });
      }

      const user = await new UserModule().fetchById(parseInt(user_id));
      return res.status(200).json({
        success: true,
        response: user
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
  static async CreateUser(req: Request, res: Response) {
    try {
      console.log(`user.routes.create.user - attempting to create a new user (email: ${req.body.email})`);
      const { email, password, phone_number } = req.body;
      if (!email || !password || !phone_number) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request"
        });
      }
      const user = { email, password, phone_number } as User;
      const userAdded = await new UserModule().add(user);
      return res.status(200).json({
        success: true,
        response: userAdded
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
  static async UpdateUser(req: Request, res: Response) {
    try {
      console.log(`user.routes.update.user - attempting to update a user (id: ${req.params.user_id})`);
      const { user_id } = req.params;
      const { email, password, phone_number } = req.body;
      if ((!user_id && !email) || !password || !phone_number) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request"
        });
      }
      const user = { email, password, phone_number } as Partial<User>;

      const updatedUser = await new UserModule().update(parseInt(user_id), user);
      return res.status(200).json({
        success: true,
        response: updatedUser
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
}
