import User from "../db/models/user";
import { Request, Response } from "express";

export const addUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const { name, age, phone, lng, lat } = body;

    const newUser = await User.create({
      name,
      age,
      phone,
      location: {
        type: "Point",
        coordinates: [lng, lat],
      },
    });

    return res
      .status(201)
      .json({ message: "User created successfully!", data: newUser });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went worng!" });
  }
};

export const getUserByCords = async (req: Request, res: Response) => {
  try {
    const { query } = req;

    const { lng, lat, distance } = query;

    const users = await User.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
          $maxDistance: distance,
        },
      },
    });

    return res
      .status(200)
      .json({ message: "User fetched successfully!", data: users });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went worng!" });
  }
};

export const findUsersByName = async (req: Request, res: Response) => {
  try {
    const { query } = req;

    const { name } = query;

    const users = await User.find({
      name: { $regex: name, $options: "i" },
    });

    return res
      .status(200)
      .json({ message: "User fetched successfully!", data: users });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went worng!" });
  }
};

export const udpateUserById = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;

    const { id } = params;

    const user = await User.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully!" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went worng!" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { params } = req;

    const { id } = params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully!" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error?.message || "Something went worng!" });
  }
};
