import { apiResponse } from "../utils/aipResponse";
 
import { asyncHandler} from "../utils/asyncHandler";

 const healthCheckController = asyncHandler(async (req,res,next) => {
    return res
    .status(200)
    .json(new apiResponse(200,"ok","API is working fine"));
})
export { healthCheckController };
