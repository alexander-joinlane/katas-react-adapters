import { z } from "zod";

const Color = z.enum(["Red", "Green", "Blue", "Black", "White"]);

type Color = z.infer<typeof Color>;

export default Color;
