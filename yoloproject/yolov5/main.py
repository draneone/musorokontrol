import torch

# Model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')  # or yolov5n - yolov5x6, custom

# Images
img = 'test02.jpg'  # or file, Path, PIL, OpenCV, numpy, list
weights = "/publicwasteanapa-1/weights/best.pt"

# Inference
results = model(img)


# Results
results.print()  # or .show(), .save(), .crop(), .pandas(), etc.