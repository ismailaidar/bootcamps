const User = require("./../models/User");
const asyncHandler = require("./../middleware/asyncHandler.middleware");

// @desc Register user
// @route POST api/v1/auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  });

  res.status(200).json({
    success: true
  });
});
