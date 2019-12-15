/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    let events = await Event.find({});
    return res.json(events);
  },
  get: async (req, res) => {
    let id = req.params.id;
     console.log(process.env.FACEBOOK_APPID)
    if (id) {
      event = await Event.findOne({ id: id });
      return res.json(event);
    } else {
      return res.status(404).json({
        message: 'Event not found'
      });
    }
  },
  type: async (req, res) => {
    let type = req.params.type;

    if (type) {
      events = await Event.find({ type: type });
      return res.json(events);
    } else {
      return res.status(404).json({
        message: 'Event not found'
      });
    }
  },
  create: async (req, res) => {
    let data = req.body;
    if (!req.body) {
      return res.status(402).json({
        message: 'Invalid data'
      });
    }
    let newEvent = await Event.create(data).fetch();
    return res.json(newEvent);
  },
  update: async (req, res) => {
    let data = req.body;
    let id = req.params.id;
    if (!req.body) {
      return res.status(402).json({
        message: 'Invalid data'
      });
    }
    let newEvent = await Event.updateOne({ id:id }).set(data);
    return res.json(newEvent);
  },
  destroy: async (req, res) => {
    let id = req.params.id;
    if (id) {
      let newEvent = await Event.destroy({ id:id });
      let response  = 
      {
        response: "evento eliminado",
        id: id
      }
      return res.json(response);
    }
    else{
      return res.status(402).json({
        message: 'Invalid data'
      });
    }
  }
};

