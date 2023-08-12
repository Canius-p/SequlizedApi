module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return Review;
};
