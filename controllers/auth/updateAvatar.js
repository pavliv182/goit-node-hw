const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarDir, filename);

  await fs.rename(tempUpload, resultUpload);
  Jimp.read(resultUpload, (error, image) => {
    if (error) {
      next(error);
    }
    image.resize(250, 250).write(resultUpload);
  });
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
