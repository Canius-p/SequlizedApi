module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.text,
      allowNull: true,
    },
  });
  return Review;
};
