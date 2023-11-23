"use strict";
// PATH: src\domains\posts\repositories\PostRepository.mts
import { DataTypes, Model } from "sequelize";
import getEntityManager from "../../../config/db/db.config.mjs";

class FileRepository extends Model  {
    id: number;
    serverPath: string;
    fileType: string;
    originalname: string;
    fileName: string;
    web_url: string;
    isConfirmed: boolean;
}

async function createFileRepository() {
    return FileRepository.init({
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        fileType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fileType'
        },
        originalname: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'file_name'
        },
        fileName: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'file_name'
        },
        web_url: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'web_url'
        },
        serverPath: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: 'server_path'
        },
        isConfirmed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'is_confirmed'
        }

    }, {
        // Other model options go here
        sequelize: await getEntityManager(), // We need to pass the connection instance
        tableName: 'tbl_files', // We need to choose the model name,
        modelName: 'file',
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    });
}

let fileRepository = await createFileRepository();
export default async function getFileRepository() {
    if (!fileRepository)
        fileRepository = await createFileRepository();
    return fileRepository;
}