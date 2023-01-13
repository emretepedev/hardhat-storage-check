import { task, types } from "hardhat/config";
import { TASK_STORAGE_CHECK, TASK_STORAGE_LOCK } from "~/constants";

import { storageCheckAction } from "./storageCheck";
import { storageLockAction } from "./storageLock";

// TODO: add --continue-on-error flag
// TODO: add --runOnCompile flag
task(TASK_STORAGE_CHECK)
  .addOptionalParam(
    "storeFile",
    "Use a specific JSON file as a storage store.",
    undefined,
    types.inputFile
  )
  .setDescription("Check the storage layout of contracts.")
  .setAction(storageCheckAction);

task(TASK_STORAGE_LOCK)
  .addOptionalVariadicPositionalParam(
    "excludeContracts",
    "Regex string to ignore contracts.",
    undefined,
    types.string
  )
  .addOptionalParam(
    "storeFile",
    "Create or update a specific JSON file to save the storage store.",
    undefined,
    types.string
  )
  .addFlag("prettify", "Save the file by formatting.")
  .addFlag(
    "overwrite",
    "Overwrite if there is a store file with the same name."
  )
  .setDescription("Create or update the new storage store of contracts.")
  .setAction(storageLockAction);
