import { apiResponse } from "../utils/apiResponse.js";

import asyncHandler from "../utils/asyncHandler.js";

 const healthCheckController = asyncHandler(async (req,res,next) => {
    return res
    .status(200)
    .json(new apiResponse(200,"ok","API is working fine"));
})
export { healthCheckController };