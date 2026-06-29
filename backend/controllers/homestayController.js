let homestays = [
  {
    id: 1,
    name: "Green Valley Homestay",
    location: "Dehradun",
    price: 2500,
  },
  {
    id: 2,
    name: "Mountain View Cottage",
    location: "Mussoorie",
    price: 3500,
  },
];

// GET ALL
exports.getAll = (req, res) => {
  res.json(homestays);
};

// GET BY ID
exports.getById = (req, res) => {
  const stay = homestays.find(
    (h) => h.id == req.params.id
  );

  if (!stay)
    return res.status(404).json({
      message: "Not Found",
    });

  res.json(stay);
};

// POST
exports.create = (req, res) => {
  const stay = {
    id: homestays.length + 1,
    ...req.body,
  };

  homestays.push(stay);

  res.status(201).json(stay);
};

// PUT
exports.update = (req, res) => {
  const index = homestays.findIndex(
    (h) => h.id == req.params.id
  );

  if (index === -1)
    return res.status(404).json({
      message: "Not Found",
    });

  homestays[index] = {
    ...homestays[index],
    ...req.body,
  };

  res.json(homestays[index]);
};

// DELETE
exports.remove = (req, res) => {
  homestays = homestays.filter(
    (h) => h.id != req.params.id
  );

  res.json({
    message: "Deleted Successfully",
  });
};

// SEARCH
exports.search = (req, res) => {
  const location = req.query.location;

  const result = homestays.filter((h) =>
    h.location.toLowerCase().includes(location.toLowerCase())
  );

  res.json(result);
};