const data = require('../../../data/kantotennis.json')

export default (req, res) => {
  const year = req.query.year;
  const list = data[year] ? data[year] : [];
  res.status(200).json(list);
}
