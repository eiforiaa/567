const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Attraction = require('../models/Attraction');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const AttractionController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Attraction,
        values: {
          id: entry.global_id,
          name: entry.Name,
          admArea: entry.AdmArea,
          district: entry.District,
          address: entry.Address,
          
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let attractions;

      if (req.query.name) {
        attractions = await Attraction.findAll({
          where: {
            Name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        attractions = await Attraction.findAll();
      }

      return res.status(200).json({ attractions });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = AttractionController;
