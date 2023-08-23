const admin = require("firebase-admin");
const firestore = admin.firestore();

// Create Data
exports.createData = async (req, res) => {
  try {
    const newData = ({ no_ktp, gol_darah, nama_ayah, nama_ibu } = req.body);
    const usersCollection = await firestore.collection("Users");

    const createNewData = await usersCollection.add(newData);

    res.status(200).json({
      status: "Succes",
      message: "Succesfully for Add Data",
      data: {
        usersCollection,
        no_ktp,
        gol_darah,
        nama_ayah,
        nama_ibu,
        createNewData,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.getData = async (req, res) => {
  try {
    const id = req.params.id;
    const usersCollection = firestore.collection("Users");
    const getAllData = await usersCollection.where("id", "==", id).get();

    const user = [getAllData];
    getAllData.forEach((doc) => {
      user.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    res.status(200).json({
      status: "Succes",
      message: `Succesfully for get data ${id}`,
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = ({ no_ktp, gol_darah, nama_ayah, nama_ibu } = req.body);
    const usersCollection = firestore.collection("Users").doc(id);
    await usersCollection.update(newData, { merge: true });

    res.status(200).json({
      status: "Succes",
      message: "Succesfully for update data",
      data: {
        usersCollection,
        no_ktp,
        gol_darah,
        nama_ayah,
        nama_ibu,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Succes",
      message: err.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const usersCollection = firestore.collection("Users").doc(id);
    await usersCollection.delete(usersCollection);

    res.status(200).json({
      status: "Succes",
      message: "Succesfully for delete data",
      usersCollection,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
