module.exports = (err, req, res, next) => {
  console.log(err);
  if (err.name.match(/(jsonweb)/gi)) {
    res.status(401).json({ message: "Unauthorized" });
  } else if (err.name.match(/(handled)/gi)) {
    res.status(err.status).json(err.message);
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
