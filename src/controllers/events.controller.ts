import { Request, Response } from "express";
import { Event } from "../models";
import EventModule from "../modules/event/EventModule";
export class EventController {
  static async getAllEvents(req: Request, res: Response) {
    try {
      const user_id = req.query.user_id;
      if (!user_id) {
        console.log(`user.routes.get.allEvents - attempting to get all events`);
        const events = await new EventModule().fetchAll();
        return res.status(200).json({
          success: true,
          response: events
        });
      }
      console.log(`user.routes.get.allEvents - attempting to get all events for user (id: ${user_id})`);
      const events = await new EventModule().fetchByQuery({ user_id });
      return res.status(200).json({
        success: true,
        response: events
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
  static async getEventById(req: Request, res: Response) {
    try {
      console.log(`event.routes.get - attempting to get event (id: ${req.params.event_id})`);
      const event_id = req.params.event_id;
      if (!event_id) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request"
        });
      }

      const event = await new EventModule().fetchById(parseInt(event_id));
      return res.status(200).json({
        success: true,
        response: event
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
  static async CreateEvent(req: Request, res: Response) {
    try {
      console.log(`event.routes.create - attempting to create a new event (type: ${req.body.type})`);
      const { type, user_id = "" } = req.body;
      if (!type) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request"
        });
      }
      const event = { type, user_id } as Event;
      const eventAdded = await new EventModule().add(event);
      return res.status(200).json({
        success: true,
        response: eventAdded
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err
      });
    }
  }
}
