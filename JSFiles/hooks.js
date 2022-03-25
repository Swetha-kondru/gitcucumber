"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
(0, cucumber_1.AfterStep)(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
        else if (Scenario.result.status === cucumber_1.Status.PASSED) {
            console.log("all testcases are passed");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9mZWF0dXJlcy9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUV2RCxJQUFBLG9CQUFTLEVBQUMsVUFBZSxRQUFROztRQUU3QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBRTFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWxELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBSXZDO2FBSUQsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBRyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUE7U0FJM0M7SUFFRCxDQUFDO0NBQUEsQ0FBQyxDQUFBIn0=