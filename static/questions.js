const QUESTIONS = [
  {
    "id": "CV-0001",
    "category": "FUN TECH",
    "q": "Your laptop freezes 2 minutes before submission. What is the classic first move?",
    "options": [
      "Restart it",
      "Compliment it",
      "Unplug Wi-Fi",
      "Cry"
    ],
    "a": "Restart it",
    "explanation": "Classic emergency move."
  },
  {
    "id": "CV-0002",
    "category": "FUN TECH",
    "q": "You accidentally close a tab you needed. Which shortcut helps?",
    "options": [
      "Ctrl + Shift + T",
      "Ctrl + P",
      "Alt + F4",
      "Ctrl + Q"
    ],
    "a": "Ctrl + Shift + T",
    "explanation": "It reopens the last closed tab."
  },
  {
    "id": "CV-0003",
    "category": "FUN TECH",
    "q": "You have 47 browser tabs open. Your laptop is probably:",
    "options": [
      "Thriving",
      "Questioning its life",
      "Fully charged",
      "On airplane mode"
    ],
    "a": "Questioning its life",
    "explanation": "47 tabs is a cry for help."
  },
  {
    "id": "CV-0004",
    "category": "FUN TECH",
    "q": "Your teammate says, 'Trust me, I know what I'm doing.' What happens next?",
    "options": [
      "Everything works",
      "Nothing works",
      "Someone opens YouTube",
      "All of these"
    ],
    "a": "All of these",
    "explanation": "College project probability."
  },
  {
    "id": "CV-0005",
    "category": "FUN TECH",
    "q": "You type 'final_final_REAL_final.pptx'. What does this suggest?",
    "options": [
      "There are more versions",
      "It is definitely final",
      "It is empty",
      "It is a video"
    ],
    "a": "There are more versions",
    "explanation": "We all know this naming system."
  },
  {
    "id": "CV-0006",
    "category": "FUN TECH",
    "q": "Your phone is at 1% and the charger is across the room. Biggest enemy?",
    "options": [
      "Physics",
      "Distance",
      "Your laziness",
      "The charger"
    ],
    "a": "Your laziness",
    "explanation": "The hostel final boss."
  },
  {
    "id": "CV-0007",
    "category": "FUN TECH",
    "q": "A QR code is not scanning. What should you try first?",
    "options": [
      "Move/adjust the camera",
      "Throw the phone",
      "Delete the browser",
      "Change team name"
    ],
    "a": "Move/adjust the camera",
    "explanation": "Distance and focus matter."
  },
  {
    "id": "CV-0008",
    "category": "FUN TECH",
    "q": "Which message causes instant group-chat panic?",
    "options": [
      "Guys, important announcement",
      "Okay",
      "Thanks",
      "Good morning"
    ],
    "a": "Guys, important announcement",
    "explanation": "Everyone suddenly becomes active."
  },
  {
    "id": "CV-0009",
    "category": "FUN TECH",
    "q": "You submit an assignment and immediately notice a typo. Your reaction?",
    "options": [
      "Regret",
      "Victory",
      "Sleep",
      "Bluetooth"
    ],
    "a": "Regret",
    "explanation": "The typo always appears after Submit."
  },
  {
    "id": "CV-0010",
    "category": "FUN TECH",
    "q": "The projector says 'No Signal.' What should you check first?",
    "options": [
      "Cable/input source",
      "Attendance",
      "Weather",
      "Class timetable"
    ],
    "a": "Cable/input source",
    "explanation": "The display connection/source is the obvious first check."
  },
  {
    "id": "CV-0011",
    "category": "LOGIC",
    "q": "A bat and ball cost ₹110 together. The bat costs ₹100 more. The ball costs:",
    "options": [
      "₹5",
      "₹10",
      "₹15",
      "₹20"
    ],
    "a": "₹5",
    "explanation": "₹5 + ₹105 = ₹110."
  },
  {
    "id": "CV-0012",
    "category": "LOGIC",
    "q": "You overtake the person in second place. You are now:",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "a": "Second",
    "explanation": "You take their position."
  },
  {
    "id": "CV-0013",
    "category": "LOGIC",
    "q": "A farmer has 10 sheep. All but 3 run away. How many remain?",
    "options": [
      "3",
      "7",
      "10",
      "0"
    ],
    "a": "3",
    "explanation": "All but 3 means 3 remain."
  },
  {
    "id": "CV-0014",
    "category": "LOGIC",
    "q": "Which comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "a": "32",
    "explanation": "The numbers double."
  },
  {
    "id": "CV-0015",
    "category": "LOGIC",
    "q": "Which is heavier: 1 kg iron or 1 kg cotton?",
    "options": [
      "Iron",
      "Cotton",
      "Same",
      "Depends on weather"
    ],
    "a": "Same",
    "explanation": "A kilogram is a kilogram."
  },
  {
    "id": "CV-0016",
    "category": "LOGIC",
    "q": "You have one match and enter a dark room with a candle, lamp and stove. What do you light first?",
    "options": [
      "Candle",
      "Lamp",
      "Stove",
      "Match"
    ],
    "a": "Match",
    "explanation": "You need the match lit first."
  },
  {
    "id": "CV-0017",
    "category": "LOGIC",
    "q": "If yesterday was Monday, tomorrow is:",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "a": "Wednesday",
    "explanation": "Today is Tuesday."
  },
  {
    "id": "CV-0018",
    "category": "LOGIC",
    "q": "A clock shows 3:00. The angle between its hands is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": "90°",
    "explanation": "The hands are perpendicular."
  },
  {
    "id": "CV-0019",
    "category": "LOGIC",
    "q": "A father and son are in an accident. The father dies. The surgeon says, 'He's my son.' The surgeon is:",
    "options": [
      "His mother",
      "His uncle",
      "His sister",
      "His teacher"
    ],
    "a": "His mother",
    "explanation": "The riddle challenges an assumption."
  },
  {
    "id": "CV-0020",
    "category": "LOGIC",
    "q": "Which does NOT belong: Apple, Mango, Banana, Carrot?",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "a": "Carrot",
    "explanation": "Carrot is generally classified as a vegetable."
  },
  {
    "id": "CV-0021",
    "category": "AI",
    "q": "You ask AI to make a 2-page answer and it gives 12 pages. What do you say?",
    "options": [
      "Make it shorter",
      "Print everything",
      "Delete the AI",
      "Ask for 50 more pages"
    ],
    "a": "Make it shorter",
    "explanation": "You can refine the prompt."
  },
  {
    "id": "CV-0022",
    "category": "AI",
    "q": "Which prompt is more specific?",
    "options": [
      "Make something cool",
      "Make a blue poster for a college coding event with a QR area",
      "Do it",
      "Poster pls"
    ],
    "a": "Make a blue poster for a college coding event with a QR area",
    "explanation": "Specific instructions help."
  },
  {
    "id": "CV-0023",
    "category": "AI",
    "q": "AI confidently gives a false fact. This can be called:",
    "options": [
      "Hallucination",
      "Charging",
      "Caching",
      "Streaming"
    ],
    "a": "Hallucination",
    "explanation": "AI can generate unsupported information."
  },
  {
    "id": "CV-0024",
    "category": "AI",
    "q": "You want AI to explain a topic to a beginner. You should ask for:",
    "options": [
      "A simple explanation",
      "More jargon",
      "A password",
      "A spreadsheet"
    ],
    "a": "A simple explanation",
    "explanation": "Tell it the audience and difficulty."
  },
  {
    "id": "CV-0025",
    "category": "AI",
    "q": "Which is a good use of AI for a fresher?",
    "options": [
      "Brainstorming ideas",
      "Sharing OTPs",
      "Sharing passwords",
      "Revealing private data"
    ],
    "a": "Brainstorming ideas",
    "explanation": "AI can help with creative work."
  },
  {
    "id": "CV-0026",
    "category": "AI",
    "q": "You want exactly 3 caption ideas. Why say '3'?",
    "options": [
      "It sets an output limit",
      "It improves battery",
      "It changes keyboard",
      "It boosts Wi-Fi"
    ],
    "a": "It sets an output limit",
    "explanation": "Clear constraints help."
  },
  {
    "id": "CV-0027",
    "category": "AI",
    "q": "AI writes code you do not understand. Before using it, you should:",
    "options": [
      "Read/test/understand it",
      "Run blindly",
      "Send it everywhere",
      "Delete your editor"
    ],
    "a": "Read/test/understand it",
    "explanation": "Generated code still needs checking."
  },
  {
    "id": "CV-0028",
    "category": "AI",
    "q": "AI says 'I am 100% certain.' You should:",
    "options": [
      "Verify important facts",
      "Believe it automatically",
      "Screenshot it",
      "Ask for an OTP"
    ],
    "a": "Verify important facts",
    "explanation": "Confidence is not proof."
  },
  {
    "id": "CV-0029",
    "category": "AI",
    "q": "Which is a creative AI task?",
    "options": [
      "Generate a fictional superhero name",
      "Guess an OTP",
      "Reveal a password",
      "Find private messages"
    ],
    "a": "Generate a fictional superhero name",
    "explanation": "Creative generation is a normal use."
  },
  {
    "id": "CV-0030",
    "category": "AI",
    "q": "You want a formal email rewritten casually. What should you specify?",
    "options": [
      "Tone",
      "Battery",
      "Wi-Fi password",
      "Screen size"
    ],
    "a": "Tone",
    "explanation": "Tone controls how the writing sounds."
  },
  {
    "id": "CV-0031",
    "category": "TECH",
    "q": "What does Ctrl + C usually do?",
    "options": [
      "Copy",
      "Cut",
      "Close",
      "Compile"
    ],
    "a": "Copy",
    "explanation": "It copies selected content."
  },
  {
    "id": "CV-0032",
    "category": "TECH",
    "q": "What does Ctrl + V usually do?",
    "options": [
      "Paste",
      "Print",
      "Undo",
      "Zoom"
    ],
    "a": "Paste",
    "explanation": "It pastes copied/cut content."
  },
  {
    "id": "CV-0033",
    "category": "TECH",
    "q": "Which is commonly used for permanent file storage?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "GPU"
    ],
    "a": "SSD",
    "explanation": "SSD stores data when power is off."
  },
  {
    "id": "CV-0034",
    "category": "TECH",
    "q": "Which is often called the 'brain' of a computer?",
    "options": [
      "CPU",
      "Mouse",
      "Monitor",
      "Keyboard"
    ],
    "a": "CPU",
    "explanation": "The CPU executes instructions."
  },
  {
    "id": "CV-0035",
    "category": "TECH",
    "q": "Wi-Fi mainly provides:",
    "options": [
      "Wireless network connectivity",
      "Extra battery",
      "More storage",
      "Brighter screen"
    ],
    "a": "Wireless network connectivity",
    "explanation": "Wi-Fi connects devices wirelessly."
  },
  {
    "id": "CV-0036",
    "category": "TECH",
    "q": "Which device displays images?",
    "options": [
      "Monitor",
      "Keyboard",
      "Router",
      "Microphone"
    ],
    "a": "Monitor",
    "explanation": "The monitor displays visual output."
  },
  {
    "id": "CV-0037",
    "category": "TECH",
    "q": "Which device is mainly used for typing?",
    "options": [
      "Keyboard",
      "Speaker",
      "Router",
      "Webcam"
    ],
    "a": "Keyboard",
    "explanation": "Keyboard input is used for typing."
  },
  {
    "id": "CV-0038",
    "category": "TECH",
    "q": "A QR code usually contains:",
    "options": [
      "Encoded information",
      "Electricity",
      "Battery power",
      "Sound waves"
    ],
    "a": "Encoded information",
    "explanation": "A scanner reads the encoded information."
  },
  {
    "id": "CV-0039",
    "category": "TECH",
    "q": "Which is a web browser?",
    "options": [
      "Chrome",
      "Python",
      "Windows",
      "Bluetooth"
    ],
    "a": "Chrome",
    "explanation": "Chrome is a browser."
  },
  {
    "id": "CV-0040",
    "category": "TECH",
    "q": "Which is an operating system?",
    "options": [
      "Windows",
      "Google",
      "Wi-Fi",
      "USB"
    ],
    "a": "Windows",
    "explanation": "Windows is an operating system."
  },
  {
    "id": "CV-0041",
    "category": "DETECTIVE",
    "q": "A clue says 'I have keys but no locks.' What am I?",
    "options": [
      "Keyboard",
      "Door",
      "Suitcase",
      "Map"
    ],
    "a": "Keyboard",
    "explanation": "A keyboard has keys, not locks."
  },
  {
    "id": "CV-0042",
    "category": "DETECTIVE",
    "q": "A clue says 'I get wetter as I dry.' What am I?",
    "options": [
      "Towel",
      "Cloud",
      "Sponge",
      "Umbrella"
    ],
    "a": "Towel",
    "explanation": "A towel gets wet while drying something."
  },
  {
    "id": "CV-0043",
    "category": "DETECTIVE",
    "q": "A clue says 'I have a face and two hands but no arms.' What am I?",
    "options": [
      "Clock",
      "Robot",
      "Mirror",
      "Phone"
    ],
    "a": "Clock",
    "explanation": "A clock has a face and hands."
  },
  {
    "id": "CV-0044",
    "category": "DETECTIVE",
    "q": "A note says 3-15-4-5. Using A=1, B=2, it spells:",
    "options": [
      "CODE",
      "COLD",
      "DECO",
      "BODE"
    ],
    "a": "CODE",
    "explanation": "3=C, 15=O, 4=D, 5=E."
  },
  {
    "id": "CV-0045",
    "category": "DETECTIVE",
    "q": "A suspect says they were in the library. A timestamped photo places them elsewhere. This is:",
    "options": [
      "A contradiction to investigate",
      "Automatic proof of guilt",
      "A Wi-Fi issue",
      "A password"
    ],
    "a": "A contradiction to investigate",
    "explanation": "Conflicting evidence deserves investigation."
  },
  {
    "id": "CV-0046",
    "category": "DETECTIVE",
    "q": "A clue says 'first letters matter.' What should you inspect?",
    "options": [
      "First letters of relevant words",
      "Last page only",
      "Battery",
      "Wallpaper"
    ],
    "a": "First letters of relevant words",
    "explanation": "The clue tells you where to look."
  },
  {
    "id": "CV-0047",
    "category": "DETECTIVE",
    "q": "A mystery message says 'READ BETWEEN THE LINES.' You should inspect:",
    "options": [
      "Hidden text/spacing",
      "Battery health",
      "Phone case",
      "Wi-Fi speed"
    ],
    "a": "Hidden text/spacing",
    "explanation": "The wording suggests hidden information."
  },
  {
    "id": "CV-0048",
    "category": "DETECTIVE",
    "q": "A file named FINAL was modified after submission. What is useful to inspect?",
    "options": [
      "File history/metadata",
      "Keyboard",
      "Wallpaper",
      "Speaker"
    ],
    "a": "File history/metadata",
    "explanation": "Metadata can provide timing clues."
  },
  {
    "id": "CV-0049",
    "category": "DETECTIVE",
    "q": "Two explanations fit the clues. What should a detective do?",
    "options": [
      "Find a clue that separates them",
      "Guess",
      "Stop",
      "Choose the funniest"
    ],
    "a": "Find a clue that separates them",
    "explanation": "Good investigation seeks distinguishing evidence."
  },
  {
    "id": "CV-0050",
    "category": "DETECTIVE",
    "q": "A detective finds a suspicious USB. First step?",
    "options": [
      "Inspect it without altering evidence",
      "Format it",
      "Throw it away",
      "Guess"
    ],
    "a": "Inspect it without altering evidence",
    "explanation": "Preserve evidence while checking it."
  },
  {
    "id": "CV-0051",
    "category": "COLLEGE CHAOS",
    "q": "Professor says 'This will be easy.' Your safest move?",
    "options": [
      "Open your notebook",
      "Celebrate",
      "Leave",
      "Sleep"
    ],
    "a": "Open your notebook",
    "explanation": "Never underestimate that sentence."
  },
  {
    "id": "CV-0052",
    "category": "COLLEGE CHAOS",
    "q": "Which item mysteriously disappears in hostels?",
    "options": [
      "Charger",
      "Ceiling",
      "Bed",
      "Building"
    ],
    "a": "Charger",
    "explanation": "Chargers travel mysteriously."
  },
  {
    "id": "CV-0053",
    "category": "COLLEGE CHAOS",
    "q": "Your roommate says '5 minutes' after an alarm. Usually:",
    "options": [
      "The timeline is optimistic",
      "Exactly 5 minutes",
      "They are outside",
      "Semester ended"
    ],
    "a": "The timeline is optimistic",
    "explanation": "'Five minutes' is flexible."
  },
  {
    "id": "CV-0054",
    "category": "COLLEGE CHAOS",
    "q": "Your team has 30 seconds left. Worst strategy?",
    "options": [
      "Argue about the font",
      "Answer",
      "Read the question",
      "Split tasks"
    ],
    "a": "Argue about the font",
    "explanation": "Priorities!"
  },
  {
    "id": "CV-0055",
    "category": "COLLEGE CHAOS",
    "q": "Someone asks, 'Who has the PPT?' Five minutes before presenting. Your first goal?",
    "options": [
      "Find the actual file",
      "Change wallpaper",
      "Open Bluetooth",
      "Rename laptop"
    ],
    "a": "Find the actual file",
    "explanation": "Locate the presentation quickly."
  },
  {
    "id": "CV-0056",
    "category": "COLLEGE CHAOS",
    "q": "You have an 8 AM class after sleeping at 3 AM. Best long-term fix?",
    "options": [
      "Sleep earlier when possible",
      "Set 20 alarms and ignore them",
      "Drink only cola",
      "Blame the moon"
    ],
    "a": "Sleep earlier when possible",
    "explanation": "Sleep helps mornings."
  },
  {
    "id": "CV-0057",
    "category": "COLLEGE CHAOS",
    "q": "Your teammate says 'I was mentally contributing.' Best response?",
    "options": [
      "Ask for their actual task/result",
      "Give them all points",
      "Delete project",
      "Turn off lights"
    ],
    "a": "Ask for their actual task/result",
    "explanation": "Teams need actual contributions."
  },
  {
    "id": "CV-0058",
    "category": "COLLEGE CHAOS",
    "q": "The canteen queue is huge. A simple strategy is:",
    "options": [
      "Choose a less crowded option/time",
      "Debug the queue",
      "Turn on Bluetooth",
      "Refresh browser"
    ],
    "a": "Choose a less crowded option/time",
    "explanation": "Simple queue management."
  },
  {
    "id": "CV-0059",
    "category": "COLLEGE CHAOS",
    "q": "Your assignment is due in 10 minutes and the file is missing. First:",
    "options": [
      "Search for the filename",
      "Change ringtone",
      "Restart the monitor",
      "Open Instagram"
    ],
    "a": "Search for the filename",
    "explanation": "Search before panicking."
  },
  {
    "id": "CV-0060",
    "category": "COLLEGE CHAOS",
    "q": "Someone says 'Bro trust me, I watched one tutorial.' Your reaction?",
    "options": [
      "Check the result",
      "Give them admin access",
      "Delete everything",
      "Close the laptop"
    ],
    "a": "Check the result",
    "explanation": "Tutorial knowledge still needs testing."
  },
  {
    "id": "CV-0061",
    "category": "WEIRD & RANDOM",
    "q": "Which would be the worst password?",
    "options": [
      "password123",
      "A unique passphrase",
      "A random generated password",
      "A long unique password"
    ],
    "a": "password123",
    "explanation": "It is predictable."
  },
  {
    "id": "CV-0062",
    "category": "WEIRD & RANDOM",
    "q": "Your calculator says 2+2=5. First assumption?",
    "options": [
      "Something is wrong",
      "Math changed",
      "Semester ended",
      "Calculator became philosophical"
    ],
    "a": "Something is wrong",
    "explanation": "Check the input/calculator."
  },
  {
    "id": "CV-0063",
    "category": "WEIRD & RANDOM",
    "q": "Which is most likely to have a mute button?",
    "options": [
      "Remote control",
      "Notebook",
      "Water bottle",
      "Backpack"
    ],
    "a": "Remote control",
    "explanation": "Remotes commonly control audio."
  },
  {
    "id": "CV-0064",
    "category": "WEIRD & RANDOM",
    "q": "Your laptop fan sounds like a helicopter. You should probably:",
    "options": [
      "Check what is running/heat",
      "Open more tabs",
      "Put it under a pillow",
      "Ignore it"
    ],
    "a": "Check what is running/heat",
    "explanation": "High workload or heat can make fans loud."
  },
  {
    "id": "CV-0065",
    "category": "WEIRD & RANDOM",
    "q": "Which sounds like a fake tech startup?",
    "options": [
      "Quantum Banana",
      "Microsoft",
      "Mozilla",
      "Google"
    ],
    "a": "Quantum Banana",
    "explanation": "It sounds invented."
  },
  {
    "id": "CV-0066",
    "category": "WEIRD & RANDOM",
    "q": "Your phone falls face-down. First thing you check?",
    "options": [
      "The screen",
      "Weather",
      "Wi-Fi password",
      "Attendance"
    ],
    "a": "The screen",
    "explanation": "Immediate survival check."
  },
  {
    "id": "CV-0067",
    "category": "WEIRD & RANDOM",
    "q": "Which is most likely an image file?",
    "options": [
      ".jpg",
      ".mp4",
      ".txt",
      ".csv"
    ],
    "a": ".jpg",
    "explanation": "JPG is an image format."
  },
  {
    "id": "CV-0068",
    "category": "WEIRD & RANDOM",
    "q": "Which is most likely a video file?",
    "options": [
      ".mp4",
      ".txt",
      ".jpg",
      ".csv"
    ],
    "a": ".mp4",
    "explanation": "MP4 is a common video format."
  },
  {
    "id": "CV-0069",
    "category": "WEIRD & RANDOM",
    "q": "Which sounds most like internet slang?",
    "options": [
      "LOL",
      "RAM",
      "CPU",
      "HTTP"
    ],
    "a": "LOL",
    "explanation": "LOL is common online slang."
  },
  {
    "id": "CV-0070",
    "category": "WEIRD & RANDOM",
    "q": "A mysterious software error appears. Most useful first move?",
    "options": [
      "Search the exact error",
      "Increase brightness",
      "Rename laptop",
      "Change ringtone"
    ],
    "a": "Search the exact error",
    "explanation": "The error text often gives useful clues."
  },
  {
    "id": "CV-0071",
    "category": "QUICKFIRE",
    "q": "Which key usually starts a new line?",
    "options": [
      "Enter",
      "Shift",
      "Ctrl",
      "Esc"
    ],
    "a": "Enter",
    "explanation": "Enter starts a new line."
  },
  {
    "id": "CV-0072",
    "category": "QUICKFIRE",
    "q": "Which symbol is common in email addresses?",
    "options": [
      "@",
      "#",
      "$",
      "%"
    ],
    "a": "@",
    "explanation": "It separates the username and domain."
  },
  {
    "id": "CV-0073",
    "category": "QUICKFIRE",
    "q": "Which is a search engine?",
    "options": [
      "Google",
      "Bluetooth",
      "Windows",
      "USB"
    ],
    "a": "Google",
    "explanation": "Google is a search engine."
  },
  {
    "id": "CV-0074",
    "category": "QUICKFIRE",
    "q": "Which is a social media platform?",
    "options": [
      "Instagram",
      "HDMI",
      "SSD",
      "RAM"
    ],
    "a": "Instagram",
    "explanation": "Instagram is a social platform."
  },
  {
    "id": "CV-0075",
    "category": "QUICKFIRE",
    "q": "Which is commonly used to listen to audio?",
    "options": [
      "Headphones",
      "Router",
      "Mouse pad",
      "Webcam"
    ],
    "a": "Headphones",
    "explanation": "They output audio."
  },
  {
    "id": "CV-0076",
    "category": "QUICKFIRE",
    "q": "Which key often cancels/escapes an action?",
    "options": [
      "Esc",
      "Tab",
      "Caps Lock",
      "Space"
    ],
    "a": "Esc",
    "explanation": "Esc commonly means escape/cancel."
  },
  {
    "id": "CV-0077",
    "category": "QUICKFIRE",
    "q": "Which key can make letters uppercase while held?",
    "options": [
      "Shift",
      "Alt",
      "Tab",
      "Enter"
    ],
    "a": "Shift",
    "explanation": "Shift modifies letter case."
  },
  {
    "id": "CV-0078",
    "category": "QUICKFIRE",
    "q": "What does 'app' usually mean?",
    "options": [
      "Application",
      "Apple password",
      "Audio printer program",
      "Automatic pixel"
    ],
    "a": "Application",
    "explanation": "App is short for application."
  },
  {
    "id": "CV-0079",
    "category": "QUICKFIRE",
    "q": "Which is larger?",
    "options": [
      "1 GB",
      "1 MB",
      "1 KB",
      "1 byte"
    ],
    "a": "1 GB",
    "explanation": "GB is larger than MB and KB."
  },
  {
    "id": "CV-0080",
    "category": "QUICKFIRE",
    "q": "Which is a plain-text file extension?",
    "options": [
      ".txt",
      ".mp4",
      ".png",
      ".mp3"
    ],
    "a": ".txt",
    "explanation": "TXT commonly stores plain text."
  },
  {
    "id": "CV-0081",
    "category": "TECH",
    "q": "What is Ctrl + Z mainly used for?",
    "options": [
      "undo your last action",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "undo your last action",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0082",
    "category": "FUN TECH",
    "q": "Your teammate asks what Ctrl + Z does. Which answer saves the round?",
    "options": [
      "undo your last action",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "undo your last action",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0083",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "Ctrl + Z → undo your last action",
      "Ctrl + Z → cooking food",
      "Ctrl + Z → measuring height",
      "Ctrl + Z → changing wallpaper"
    ],
    "a": "Ctrl + Z → undo your last action",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0084",
    "category": "TECH",
    "q": "What is Ctrl + S mainly used for?",
    "options": [
      "save your work",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "save your work",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0085",
    "category": "FUN TECH",
    "q": "Your teammate asks what Ctrl + S does. Which answer saves the round?",
    "options": [
      "save your work",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "save your work",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0086",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "Ctrl + S → save your work",
      "Ctrl + S → cooking food",
      "Ctrl + S → measuring height",
      "Ctrl + S → changing wallpaper"
    ],
    "a": "Ctrl + S → save your work",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0087",
    "category": "TECH",
    "q": "What is Ctrl + F mainly used for?",
    "options": [
      "find text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "find text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0088",
    "category": "FUN TECH",
    "q": "Your teammate asks what Ctrl + F does. Which answer saves the round?",
    "options": [
      "find text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "find text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0089",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "Ctrl + F → find text",
      "Ctrl + F → cooking food",
      "Ctrl + F → measuring height",
      "Ctrl + F → changing wallpaper"
    ],
    "a": "Ctrl + F → find text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0090",
    "category": "TECH",
    "q": "What is QR code mainly used for?",
    "options": [
      "encode information",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "encode information",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0091",
    "category": "FUN TECH",
    "q": "Your teammate asks what QR code does. Which answer saves the round?",
    "options": [
      "encode information",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "encode information",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0092",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "QR code → encode information",
      "QR code → cooking food",
      "QR code → measuring height",
      "QR code → changing wallpaper"
    ],
    "a": "QR code → encode information",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0093",
    "category": "TECH",
    "q": "What is browser mainly used for?",
    "options": [
      "open websites",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "open websites",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0094",
    "category": "FUN TECH",
    "q": "Your teammate asks what browser does. Which answer saves the round?",
    "options": [
      "open websites",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "open websites",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0095",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "browser → open websites",
      "browser → cooking food",
      "browser → measuring height",
      "browser → changing wallpaper"
    ],
    "a": "browser → open websites",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0096",
    "category": "TECH",
    "q": "What is router mainly used for?",
    "options": [
      "direct network traffic",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "direct network traffic",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0097",
    "category": "FUN TECH",
    "q": "Your teammate asks what router does. Which answer saves the round?",
    "options": [
      "direct network traffic",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "direct network traffic",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0098",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "router → direct network traffic",
      "router → cooking food",
      "router → measuring height",
      "router → changing wallpaper"
    ],
    "a": "router → direct network traffic",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0099",
    "category": "TECH",
    "q": "What is CPU mainly used for?",
    "options": [
      "execute instructions",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "execute instructions",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0100",
    "category": "FUN TECH",
    "q": "Your teammate asks what CPU does. Which answer saves the round?",
    "options": [
      "execute instructions",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "execute instructions",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0101",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "CPU → execute instructions",
      "CPU → cooking food",
      "CPU → measuring height",
      "CPU → changing wallpaper"
    ],
    "a": "CPU → execute instructions",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0102",
    "category": "TECH",
    "q": "What is RAM mainly used for?",
    "options": [
      "hold temporary working data",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "hold temporary working data",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0103",
    "category": "FUN TECH",
    "q": "Your teammate asks what RAM does. Which answer saves the round?",
    "options": [
      "hold temporary working data",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "hold temporary working data",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0104",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "RAM → hold temporary working data",
      "RAM → cooking food",
      "RAM → measuring height",
      "RAM → changing wallpaper"
    ],
    "a": "RAM → hold temporary working data",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0105",
    "category": "TECH",
    "q": "What is SSD mainly used for?",
    "options": [
      "store files",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "store files",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0106",
    "category": "FUN TECH",
    "q": "Your teammate asks what SSD does. Which answer saves the round?",
    "options": [
      "store files",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "store files",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0107",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "SSD → store files",
      "SSD → cooking food",
      "SSD → measuring height",
      "SSD → changing wallpaper"
    ],
    "a": "SSD → store files",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0108",
    "category": "TECH",
    "q": "What is keyboard mainly used for?",
    "options": [
      "type text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "type text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0109",
    "category": "FUN TECH",
    "q": "Your teammate asks what keyboard does. Which answer saves the round?",
    "options": [
      "type text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "type text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0110",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "keyboard → type text",
      "keyboard → cooking food",
      "keyboard → measuring height",
      "keyboard → changing wallpaper"
    ],
    "a": "keyboard → type text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0111",
    "category": "TECH",
    "q": "What is mouse mainly used for?",
    "options": [
      "control the pointer",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "control the pointer",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0112",
    "category": "FUN TECH",
    "q": "Your teammate asks what mouse does. Which answer saves the round?",
    "options": [
      "control the pointer",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "control the pointer",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0113",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "mouse → control the pointer",
      "mouse → cooking food",
      "mouse → measuring height",
      "mouse → changing wallpaper"
    ],
    "a": "mouse → control the pointer",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0114",
    "category": "TECH",
    "q": "What is monitor mainly used for?",
    "options": [
      "display visuals",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "display visuals",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0115",
    "category": "FUN TECH",
    "q": "Your teammate asks what monitor does. Which answer saves the round?",
    "options": [
      "display visuals",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "display visuals",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0116",
    "category": "QUICKFIRE",
    "q": "Which match is correct?",
    "options": [
      "monitor → display visuals",
      "monitor → cooking food",
      "monitor → measuring height",
      "monitor → changing wallpaper"
    ],
    "a": "monitor → display visuals",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0117",
    "category": "LOGIC",
    "q": "Which number comes next: 3, 6, 12, 24, __?",
    "options": [
      "36",
      "48",
      "30",
      "42"
    ],
    "a": "48",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0118",
    "category": "LOGIC",
    "q": "Which number comes next: 5, 10, 15, 20, __?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0119",
    "category": "LOGIC",
    "q": "Which number comes next: 1, 4, 9, 16, __?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0120",
    "category": "LOGIC",
    "q": "If 4 friends split 20 chocolates equally, each gets:",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "a": "5",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0121",
    "category": "LOGIC",
    "q": "If a challenge gives 10 points and you answer twice correctly, you earn:",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "a": "20",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0122",
    "category": "LOGIC",
    "q": "If a timer starts at 60 seconds and 15 seconds pass, it shows:",
    "options": [
      "45",
      "50",
      "55",
      "75"
    ],
    "a": "45",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0123",
    "category": "LOGIC",
    "q": "Which is the odd one out?",
    "options": [
      "Circle",
      "Triangle",
      "Square",
      "Keyboard"
    ],
    "a": "Keyboard",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0124",
    "category": "LOGIC",
    "q": "Which is the odd one out?",
    "options": [
      "Chrome",
      "Firefox",
      "Edge",
      "Excel"
    ],
    "a": "Excel",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0125",
    "category": "LOGIC",
    "q": "If today is Friday, tomorrow is:",
    "options": [
      "Thursday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "a": "Saturday",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0126",
    "category": "LOGIC",
    "q": "If 2 teams each have 4 players, total players are:",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "a": "8",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0127",
    "category": "AI",
    "q": "Which prompt sounds most useful for a beginner?",
    "options": [
      "Explain recursion with a simple real-life example",
      "Explain recursion using maximum jargon",
      "Do recursion",
      "Recursion!!!"
    ],
    "a": "Explain recursion with a simple real-life example",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0128",
    "category": "AI",
    "q": "You want an AI to make your sentence funnier. What should you specify?",
    "options": [
      "Funny/casual tone",
      "Your Wi-Fi password",
      "Your OTP",
      "Your battery percentage"
    ],
    "a": "Funny/casual tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0129",
    "category": "AI",
    "q": "You want five event names. The clearest request is:",
    "options": [
      "Give 5 catchy names for a college tech fest",
      "Names",
      "Do something",
      "Help"
    ],
    "a": "Give 5 catchy names for a college tech fest",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0130",
    "category": "AI",
    "q": "AI gives a very formal answer. You want it casual. You should ask it to change the:",
    "options": [
      "Tone",
      "CPU",
      "RAM",
      "QR code"
    ],
    "a": "Tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0131",
    "category": "AI",
    "q": "You want an AI answer in a table. What should you specify?",
    "options": [
      "Output format",
      "Phone model",
      "Wallpaper",
      "Ringtone"
    ],
    "a": "Output format",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0132",
    "category": "AI",
    "q": "Which is the funniest but still useful AI request?",
    "options": [
      "Explain my timetable like a movie villain",
      "Give me an OTP",
      "Guess my password",
      "Reveal private messages"
    ],
    "a": "Explain my timetable like a movie villain",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0133",
    "category": "FUN TECH",
    "q": "During a 30-second round, your laptop freezes 2 minutes before submission. What is the classic first move?",
    "options": [
      "Restart it",
      "Compliment it",
      "Unplug Wi-Fi",
      "Cry"
    ],
    "a": "Restart it",
    "explanation": "Classic emergency move."
  },
  {
    "id": "CV-0134",
    "category": "FUN TECH",
    "q": "In a college tech challenge, you accidentally close a tab you needed. Which shortcut helps?",
    "options": [
      "Ctrl + Shift + T",
      "Ctrl + P",
      "Alt + F4",
      "Ctrl + Q"
    ],
    "a": "Ctrl + Shift + T",
    "explanation": "It reopens the last closed tab."
  },
  {
    "id": "CV-0135",
    "category": "FUN TECH",
    "q": "Your team is playing and you have 47 browser tabs open. Your laptop is probably:",
    "options": [
      "Thriving",
      "Questioning its life",
      "Fully charged",
      "On airplane mode"
    ],
    "a": "Questioning its life",
    "explanation": "47 tabs is a cry for help."
  },
  {
    "id": "CV-0136",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate says, 'Trust me, I know what I'm doing.' What happens next?",
    "options": [
      "Everything works",
      "Nothing works",
      "Someone opens YouTube",
      "All of these"
    ],
    "a": "All of these",
    "explanation": "College project probability."
  },
  {
    "id": "CV-0137",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, you type 'final_final_REAL_final.pptx'. What does this suggest?",
    "options": [
      "There are more versions",
      "It is definitely final",
      "It is empty",
      "It is a video"
    ],
    "a": "There are more versions",
    "explanation": "We all know this naming system."
  },
  {
    "id": "CV-0138",
    "category": "FUN TECH",
    "q": "During a 30-second round, your phone is at 1% and the charger is across the room. Biggest enemy?",
    "options": [
      "Physics",
      "Distance",
      "Your laziness",
      "The charger"
    ],
    "a": "Your laziness",
    "explanation": "The hostel final boss."
  },
  {
    "id": "CV-0139",
    "category": "FUN TECH",
    "q": "In a college tech challenge, a QR code is not scanning. What should you try first?",
    "options": [
      "Move/adjust the camera",
      "Throw the phone",
      "Delete the browser",
      "Change team name"
    ],
    "a": "Move/adjust the camera",
    "explanation": "Distance and focus matter."
  },
  {
    "id": "CV-0140",
    "category": "FUN TECH",
    "q": "Your team is playing and which message causes instant group-chat panic?",
    "options": [
      "Guys, important announcement",
      "Okay",
      "Thanks",
      "Good morning"
    ],
    "a": "Guys, important announcement",
    "explanation": "Everyone suddenly becomes active."
  },
  {
    "id": "CV-0141",
    "category": "FUN TECH",
    "q": "In CarbonVScode, you submit an assignment and immediately notice a typo. Your reaction?",
    "options": [
      "Regret",
      "Victory",
      "Sleep",
      "Bluetooth"
    ],
    "a": "Regret",
    "explanation": "The typo always appears after Submit."
  },
  {
    "id": "CV-0142",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, the projector says 'No Signal.' What should you check first?",
    "options": [
      "Cable/input source",
      "Attendance",
      "Weather",
      "Class timetable"
    ],
    "a": "Cable/input source",
    "explanation": "The display connection/source is the obvious first check."
  },
  {
    "id": "CV-0143",
    "category": "LOGIC",
    "q": "During a 30-second round, a bat and ball cost ₹110 together. The bat costs ₹100 more. The ball costs:",
    "options": [
      "₹5",
      "₹10",
      "₹15",
      "₹20"
    ],
    "a": "₹5",
    "explanation": "₹5 + ₹105 = ₹110."
  },
  {
    "id": "CV-0144",
    "category": "LOGIC",
    "q": "In a college tech challenge, you overtake the person in second place. You are now:",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "a": "Second",
    "explanation": "You take their position."
  },
  {
    "id": "CV-0145",
    "category": "LOGIC",
    "q": "Your team is playing and a farmer has 10 sheep. All but 3 run away. How many remain?",
    "options": [
      "3",
      "7",
      "10",
      "0"
    ],
    "a": "3",
    "explanation": "All but 3 means 3 remain."
  },
  {
    "id": "CV-0146",
    "category": "LOGIC",
    "q": "In CarbonVScode, which comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "a": "32",
    "explanation": "The numbers double."
  },
  {
    "id": "CV-0147",
    "category": "LOGIC",
    "q": "Five minutes before the demo, which is heavier: 1 kg iron or 1 kg cotton?",
    "options": [
      "Iron",
      "Cotton",
      "Same",
      "Depends on weather"
    ],
    "a": "Same",
    "explanation": "A kilogram is a kilogram."
  },
  {
    "id": "CV-0148",
    "category": "LOGIC",
    "q": "During a 30-second round, you have one match and enter a dark room with a candle, lamp and stove. What do you light first?",
    "options": [
      "Candle",
      "Lamp",
      "Stove",
      "Match"
    ],
    "a": "Match",
    "explanation": "You need the match lit first."
  },
  {
    "id": "CV-0149",
    "category": "LOGIC",
    "q": "In a college tech challenge, if yesterday was Monday, tomorrow is:",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "a": "Wednesday",
    "explanation": "Today is Tuesday."
  },
  {
    "id": "CV-0150",
    "category": "LOGIC",
    "q": "Your team is playing and a clock shows 3:00. The angle between its hands is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": "90°",
    "explanation": "The hands are perpendicular."
  },
  {
    "id": "CV-0151",
    "category": "LOGIC",
    "q": "In CarbonVScode, a father and son are in an accident. The father dies. The surgeon says, 'He's my son.' The surgeon is:",
    "options": [
      "His mother",
      "His uncle",
      "His sister",
      "His teacher"
    ],
    "a": "His mother",
    "explanation": "The riddle challenges an assumption."
  },
  {
    "id": "CV-0152",
    "category": "LOGIC",
    "q": "Five minutes before the demo, which does NOT belong: Apple, Mango, Banana, Carrot?",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "a": "Carrot",
    "explanation": "Carrot is generally classified as a vegetable."
  },
  {
    "id": "CV-0153",
    "category": "AI",
    "q": "During a 30-second round, you ask AI to make a 2-page answer and it gives 12 pages. What do you say?",
    "options": [
      "Make it shorter",
      "Print everything",
      "Delete the AI",
      "Ask for 50 more pages"
    ],
    "a": "Make it shorter",
    "explanation": "You can refine the prompt."
  },
  {
    "id": "CV-0154",
    "category": "AI",
    "q": "In a college tech challenge, which prompt is more specific?",
    "options": [
      "Make something cool",
      "Make a blue poster for a college coding event with a QR area",
      "Do it",
      "Poster pls"
    ],
    "a": "Make a blue poster for a college coding event with a QR area",
    "explanation": "Specific instructions help."
  },
  {
    "id": "CV-0155",
    "category": "AI",
    "q": "Your team is playing and aI confidently gives a false fact. This can be called:",
    "options": [
      "Hallucination",
      "Charging",
      "Caching",
      "Streaming"
    ],
    "a": "Hallucination",
    "explanation": "AI can generate unsupported information."
  },
  {
    "id": "CV-0156",
    "category": "AI",
    "q": "In CarbonVScode, you want AI to explain a topic to a beginner. You should ask for:",
    "options": [
      "A simple explanation",
      "More jargon",
      "A password",
      "A spreadsheet"
    ],
    "a": "A simple explanation",
    "explanation": "Tell it the audience and difficulty."
  },
  {
    "id": "CV-0157",
    "category": "AI",
    "q": "Five minutes before the demo, which is a good use of AI for a fresher?",
    "options": [
      "Brainstorming ideas",
      "Sharing OTPs",
      "Sharing passwords",
      "Revealing private data"
    ],
    "a": "Brainstorming ideas",
    "explanation": "AI can help with creative work."
  },
  {
    "id": "CV-0158",
    "category": "AI",
    "q": "During a 30-second round, you want exactly 3 caption ideas. Why say '3'?",
    "options": [
      "It sets an output limit",
      "It improves battery",
      "It changes keyboard",
      "It boosts Wi-Fi"
    ],
    "a": "It sets an output limit",
    "explanation": "Clear constraints help."
  },
  {
    "id": "CV-0159",
    "category": "AI",
    "q": "In a college tech challenge, aI writes code you do not understand. Before using it, you should:",
    "options": [
      "Read/test/understand it",
      "Run blindly",
      "Send it everywhere",
      "Delete your editor"
    ],
    "a": "Read/test/understand it",
    "explanation": "Generated code still needs checking."
  },
  {
    "id": "CV-0160",
    "category": "AI",
    "q": "Your team is playing and aI says 'I am 100% certain.' You should:",
    "options": [
      "Verify important facts",
      "Believe it automatically",
      "Screenshot it",
      "Ask for an OTP"
    ],
    "a": "Verify important facts",
    "explanation": "Confidence is not proof."
  },
  {
    "id": "CV-0161",
    "category": "AI",
    "q": "In CarbonVScode, which is a creative AI task?",
    "options": [
      "Generate a fictional superhero name",
      "Guess an OTP",
      "Reveal a password",
      "Find private messages"
    ],
    "a": "Generate a fictional superhero name",
    "explanation": "Creative generation is a normal use."
  },
  {
    "id": "CV-0162",
    "category": "AI",
    "q": "Five minutes before the demo, you want a formal email rewritten casually. What should you specify?",
    "options": [
      "Tone",
      "Battery",
      "Wi-Fi password",
      "Screen size"
    ],
    "a": "Tone",
    "explanation": "Tone controls how the writing sounds."
  },
  {
    "id": "CV-0163",
    "category": "TECH",
    "q": "During a 30-second round, what does Ctrl + C usually do?",
    "options": [
      "Copy",
      "Cut",
      "Close",
      "Compile"
    ],
    "a": "Copy",
    "explanation": "It copies selected content."
  },
  {
    "id": "CV-0164",
    "category": "TECH",
    "q": "In a college tech challenge, what does Ctrl + V usually do?",
    "options": [
      "Paste",
      "Print",
      "Undo",
      "Zoom"
    ],
    "a": "Paste",
    "explanation": "It pastes copied/cut content."
  },
  {
    "id": "CV-0165",
    "category": "TECH",
    "q": "Your team is playing and which is commonly used for permanent file storage?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "GPU"
    ],
    "a": "SSD",
    "explanation": "SSD stores data when power is off."
  },
  {
    "id": "CV-0166",
    "category": "TECH",
    "q": "In CarbonVScode, which is often called the 'brain' of a computer?",
    "options": [
      "CPU",
      "Mouse",
      "Monitor",
      "Keyboard"
    ],
    "a": "CPU",
    "explanation": "The CPU executes instructions."
  },
  {
    "id": "CV-0167",
    "category": "TECH",
    "q": "Five minutes before the demo, wi-Fi mainly provides:",
    "options": [
      "Wireless network connectivity",
      "Extra battery",
      "More storage",
      "Brighter screen"
    ],
    "a": "Wireless network connectivity",
    "explanation": "Wi-Fi connects devices wirelessly."
  },
  {
    "id": "CV-0168",
    "category": "TECH",
    "q": "During a 30-second round, which device displays images?",
    "options": [
      "Monitor",
      "Keyboard",
      "Router",
      "Microphone"
    ],
    "a": "Monitor",
    "explanation": "The monitor displays visual output."
  },
  {
    "id": "CV-0169",
    "category": "TECH",
    "q": "In a college tech challenge, which device is mainly used for typing?",
    "options": [
      "Keyboard",
      "Speaker",
      "Router",
      "Webcam"
    ],
    "a": "Keyboard",
    "explanation": "Keyboard input is used for typing."
  },
  {
    "id": "CV-0170",
    "category": "TECH",
    "q": "Your team is playing and a QR code usually contains:",
    "options": [
      "Encoded information",
      "Electricity",
      "Battery power",
      "Sound waves"
    ],
    "a": "Encoded information",
    "explanation": "A scanner reads the encoded information."
  },
  {
    "id": "CV-0171",
    "category": "TECH",
    "q": "In CarbonVScode, which is a web browser?",
    "options": [
      "Chrome",
      "Python",
      "Windows",
      "Bluetooth"
    ],
    "a": "Chrome",
    "explanation": "Chrome is a browser."
  },
  {
    "id": "CV-0172",
    "category": "TECH",
    "q": "Five minutes before the demo, which is an operating system?",
    "options": [
      "Windows",
      "Google",
      "Wi-Fi",
      "USB"
    ],
    "a": "Windows",
    "explanation": "Windows is an operating system."
  },
  {
    "id": "CV-0173",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a clue says 'I have keys but no locks.' What am I?",
    "options": [
      "Keyboard",
      "Door",
      "Suitcase",
      "Map"
    ],
    "a": "Keyboard",
    "explanation": "A keyboard has keys, not locks."
  },
  {
    "id": "CV-0174",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a clue says 'I get wetter as I dry.' What am I?",
    "options": [
      "Towel",
      "Cloud",
      "Sponge",
      "Umbrella"
    ],
    "a": "Towel",
    "explanation": "A towel gets wet while drying something."
  },
  {
    "id": "CV-0175",
    "category": "DETECTIVE",
    "q": "Your team is playing and a clue says 'I have a face and two hands but no arms.' What am I?",
    "options": [
      "Clock",
      "Robot",
      "Mirror",
      "Phone"
    ],
    "a": "Clock",
    "explanation": "A clock has a face and hands."
  },
  {
    "id": "CV-0176",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a note says 3-15-4-5. Using A=1, B=2, it spells:",
    "options": [
      "CODE",
      "COLD",
      "DECO",
      "BODE"
    ],
    "a": "CODE",
    "explanation": "3=C, 15=O, 4=D, 5=E."
  },
  {
    "id": "CV-0177",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a suspect says they were in the library. A timestamped photo places them elsewhere. This is:",
    "options": [
      "A contradiction to investigate",
      "Automatic proof of guilt",
      "A Wi-Fi issue",
      "A password"
    ],
    "a": "A contradiction to investigate",
    "explanation": "Conflicting evidence deserves investigation."
  },
  {
    "id": "CV-0178",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a clue says 'first letters matter.' What should you inspect?",
    "options": [
      "First letters of relevant words",
      "Last page only",
      "Battery",
      "Wallpaper"
    ],
    "a": "First letters of relevant words",
    "explanation": "The clue tells you where to look."
  },
  {
    "id": "CV-0179",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a mystery message says 'READ BETWEEN THE LINES.' You should inspect:",
    "options": [
      "Hidden text/spacing",
      "Battery health",
      "Phone case",
      "Wi-Fi speed"
    ],
    "a": "Hidden text/spacing",
    "explanation": "The wording suggests hidden information."
  },
  {
    "id": "CV-0180",
    "category": "DETECTIVE",
    "q": "Your team is playing and a file named FINAL was modified after submission. What is useful to inspect?",
    "options": [
      "File history/metadata",
      "Keyboard",
      "Wallpaper",
      "Speaker"
    ],
    "a": "File history/metadata",
    "explanation": "Metadata can provide timing clues."
  },
  {
    "id": "CV-0181",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, two explanations fit the clues. What should a detective do?",
    "options": [
      "Find a clue that separates them",
      "Guess",
      "Stop",
      "Choose the funniest"
    ],
    "a": "Find a clue that separates them",
    "explanation": "Good investigation seeks distinguishing evidence."
  },
  {
    "id": "CV-0182",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a detective finds a suspicious USB. First step?",
    "options": [
      "Inspect it without altering evidence",
      "Format it",
      "Throw it away",
      "Guess"
    ],
    "a": "Inspect it without altering evidence",
    "explanation": "Preserve evidence while checking it."
  },
  {
    "id": "CV-0183",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, professor says 'This will be easy.' Your safest move?",
    "options": [
      "Open your notebook",
      "Celebrate",
      "Leave",
      "Sleep"
    ],
    "a": "Open your notebook",
    "explanation": "Never underestimate that sentence."
  },
  {
    "id": "CV-0184",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, which item mysteriously disappears in hostels?",
    "options": [
      "Charger",
      "Ceiling",
      "Bed",
      "Building"
    ],
    "a": "Charger",
    "explanation": "Chargers travel mysteriously."
  },
  {
    "id": "CV-0185",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and your roommate says '5 minutes' after an alarm. Usually:",
    "options": [
      "The timeline is optimistic",
      "Exactly 5 minutes",
      "They are outside",
      "Semester ended"
    ],
    "a": "The timeline is optimistic",
    "explanation": "'Five minutes' is flexible."
  },
  {
    "id": "CV-0186",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, your team has 30 seconds left. Worst strategy?",
    "options": [
      "Argue about the font",
      "Answer",
      "Read the question",
      "Split tasks"
    ],
    "a": "Argue about the font",
    "explanation": "Priorities!"
  },
  {
    "id": "CV-0187",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, someone asks, 'Who has the PPT?' Five minutes before presenting. Your first goal?",
    "options": [
      "Find the actual file",
      "Change wallpaper",
      "Open Bluetooth",
      "Rename laptop"
    ],
    "a": "Find the actual file",
    "explanation": "Locate the presentation quickly."
  },
  {
    "id": "CV-0188",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, you have an 8 AM class after sleeping at 3 AM. Best long-term fix?",
    "options": [
      "Sleep earlier when possible",
      "Set 20 alarms and ignore them",
      "Drink only cola",
      "Blame the moon"
    ],
    "a": "Sleep earlier when possible",
    "explanation": "Sleep helps mornings."
  },
  {
    "id": "CV-0189",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, your teammate says 'I was mentally contributing.' Best response?",
    "options": [
      "Ask for their actual task/result",
      "Give them all points",
      "Delete project",
      "Turn off lights"
    ],
    "a": "Ask for their actual task/result",
    "explanation": "Teams need actual contributions."
  },
  {
    "id": "CV-0190",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and the canteen queue is huge. A simple strategy is:",
    "options": [
      "Choose a less crowded option/time",
      "Debug the queue",
      "Turn on Bluetooth",
      "Refresh browser"
    ],
    "a": "Choose a less crowded option/time",
    "explanation": "Simple queue management."
  },
  {
    "id": "CV-0191",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, your assignment is due in 10 minutes and the file is missing. First:",
    "options": [
      "Search for the filename",
      "Change ringtone",
      "Restart the monitor",
      "Open Instagram"
    ],
    "a": "Search for the filename",
    "explanation": "Search before panicking."
  },
  {
    "id": "CV-0192",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, someone says 'Bro trust me, I watched one tutorial.' Your reaction?",
    "options": [
      "Check the result",
      "Give them admin access",
      "Delete everything",
      "Close the laptop"
    ],
    "a": "Check the result",
    "explanation": "Tutorial knowledge still needs testing."
  },
  {
    "id": "CV-0193",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, which would be the worst password?",
    "options": [
      "password123",
      "A unique passphrase",
      "A random generated password",
      "A long unique password"
    ],
    "a": "password123",
    "explanation": "It is predictable."
  },
  {
    "id": "CV-0194",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, your calculator says 2+2=5. First assumption?",
    "options": [
      "Something is wrong",
      "Math changed",
      "Semester ended",
      "Calculator became philosophical"
    ],
    "a": "Something is wrong",
    "explanation": "Check the input/calculator."
  },
  {
    "id": "CV-0195",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and which is most likely to have a mute button?",
    "options": [
      "Remote control",
      "Notebook",
      "Water bottle",
      "Backpack"
    ],
    "a": "Remote control",
    "explanation": "Remotes commonly control audio."
  },
  {
    "id": "CV-0196",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, your laptop fan sounds like a helicopter. You should probably:",
    "options": [
      "Check what is running/heat",
      "Open more tabs",
      "Put it under a pillow",
      "Ignore it"
    ],
    "a": "Check what is running/heat",
    "explanation": "High workload or heat can make fans loud."
  },
  {
    "id": "CV-0197",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, which sounds like a fake tech startup?",
    "options": [
      "Quantum Banana",
      "Microsoft",
      "Mozilla",
      "Google"
    ],
    "a": "Quantum Banana",
    "explanation": "It sounds invented."
  },
  {
    "id": "CV-0198",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, your phone falls face-down. First thing you check?",
    "options": [
      "The screen",
      "Weather",
      "Wi-Fi password",
      "Attendance"
    ],
    "a": "The screen",
    "explanation": "Immediate survival check."
  },
  {
    "id": "CV-0199",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, which is most likely an image file?",
    "options": [
      ".jpg",
      ".mp4",
      ".txt",
      ".csv"
    ],
    "a": ".jpg",
    "explanation": "JPG is an image format."
  },
  {
    "id": "CV-0200",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and which is most likely a video file?",
    "options": [
      ".mp4",
      ".txt",
      ".jpg",
      ".csv"
    ],
    "a": ".mp4",
    "explanation": "MP4 is a common video format."
  },
  {
    "id": "CV-0201",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, which sounds most like internet slang?",
    "options": [
      "LOL",
      "RAM",
      "CPU",
      "HTTP"
    ],
    "a": "LOL",
    "explanation": "LOL is common online slang."
  },
  {
    "id": "CV-0202",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, a mysterious software error appears. Most useful first move?",
    "options": [
      "Search the exact error",
      "Increase brightness",
      "Rename laptop",
      "Change ringtone"
    ],
    "a": "Search the exact error",
    "explanation": "The error text often gives useful clues."
  },
  {
    "id": "CV-0203",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which key usually starts a new line?",
    "options": [
      "Enter",
      "Shift",
      "Ctrl",
      "Esc"
    ],
    "a": "Enter",
    "explanation": "Enter starts a new line."
  },
  {
    "id": "CV-0204",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which symbol is common in email addresses?",
    "options": [
      "@",
      "#",
      "$",
      "%"
    ],
    "a": "@",
    "explanation": "It separates the username and domain."
  },
  {
    "id": "CV-0205",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which is a search engine?",
    "options": [
      "Google",
      "Bluetooth",
      "Windows",
      "USB"
    ],
    "a": "Google",
    "explanation": "Google is a search engine."
  },
  {
    "id": "CV-0206",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which is a social media platform?",
    "options": [
      "Instagram",
      "HDMI",
      "SSD",
      "RAM"
    ],
    "a": "Instagram",
    "explanation": "Instagram is a social platform."
  },
  {
    "id": "CV-0207",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which is commonly used to listen to audio?",
    "options": [
      "Headphones",
      "Router",
      "Mouse pad",
      "Webcam"
    ],
    "a": "Headphones",
    "explanation": "They output audio."
  },
  {
    "id": "CV-0208",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which key often cancels/escapes an action?",
    "options": [
      "Esc",
      "Tab",
      "Caps Lock",
      "Space"
    ],
    "a": "Esc",
    "explanation": "Esc commonly means escape/cancel."
  },
  {
    "id": "CV-0209",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which key can make letters uppercase while held?",
    "options": [
      "Shift",
      "Alt",
      "Tab",
      "Enter"
    ],
    "a": "Shift",
    "explanation": "Shift modifies letter case."
  },
  {
    "id": "CV-0210",
    "category": "QUICKFIRE",
    "q": "Your team is playing and what does 'app' usually mean?",
    "options": [
      "Application",
      "Apple password",
      "Audio printer program",
      "Automatic pixel"
    ],
    "a": "Application",
    "explanation": "App is short for application."
  },
  {
    "id": "CV-0211",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which is larger?",
    "options": [
      "1 GB",
      "1 MB",
      "1 KB",
      "1 byte"
    ],
    "a": "1 GB",
    "explanation": "GB is larger than MB and KB."
  },
  {
    "id": "CV-0212",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which is a plain-text file extension?",
    "options": [
      ".txt",
      ".mp4",
      ".png",
      ".mp3"
    ],
    "a": ".txt",
    "explanation": "TXT commonly stores plain text."
  },
  {
    "id": "CV-0213",
    "category": "TECH",
    "q": "During a 30-second round, what is Ctrl + Z mainly used for?",
    "options": [
      "undo your last action",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "undo your last action",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0214",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what Ctrl + Z does. Which answer saves the round?",
    "options": [
      "undo your last action",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "undo your last action",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0215",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "Ctrl + Z → undo your last action",
      "Ctrl + Z → cooking food",
      "Ctrl + Z → measuring height",
      "Ctrl + Z → changing wallpaper"
    ],
    "a": "Ctrl + Z → undo your last action",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0216",
    "category": "TECH",
    "q": "In CarbonVScode, what is Ctrl + S mainly used for?",
    "options": [
      "save your work",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "save your work",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0217",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what Ctrl + S does. Which answer saves the round?",
    "options": [
      "save your work",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "save your work",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0218",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "Ctrl + S → save your work",
      "Ctrl + S → cooking food",
      "Ctrl + S → measuring height",
      "Ctrl + S → changing wallpaper"
    ],
    "a": "Ctrl + S → save your work",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0219",
    "category": "TECH",
    "q": "In a college tech challenge, what is Ctrl + F mainly used for?",
    "options": [
      "find text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "find text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0220",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what Ctrl + F does. Which answer saves the round?",
    "options": [
      "find text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "find text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0221",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "Ctrl + F → find text",
      "Ctrl + F → cooking food",
      "Ctrl + F → measuring height",
      "Ctrl + F → changing wallpaper"
    ],
    "a": "Ctrl + F → find text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0222",
    "category": "TECH",
    "q": "Five minutes before the demo, what is QR code mainly used for?",
    "options": [
      "encode information",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "encode information",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0223",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what QR code does. Which answer saves the round?",
    "options": [
      "encode information",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "encode information",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0224",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "QR code → encode information",
      "QR code → cooking food",
      "QR code → measuring height",
      "QR code → changing wallpaper"
    ],
    "a": "QR code → encode information",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0225",
    "category": "TECH",
    "q": "Your team is playing and what is browser mainly used for?",
    "options": [
      "open websites",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "open websites",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0226",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what browser does. Which answer saves the round?",
    "options": [
      "open websites",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "open websites",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0227",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "browser → open websites",
      "browser → cooking food",
      "browser → measuring height",
      "browser → changing wallpaper"
    ],
    "a": "browser → open websites",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0228",
    "category": "TECH",
    "q": "During a 30-second round, what is router mainly used for?",
    "options": [
      "direct network traffic",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "direct network traffic",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0229",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what router does. Which answer saves the round?",
    "options": [
      "direct network traffic",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "direct network traffic",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0230",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "router → direct network traffic",
      "router → cooking food",
      "router → measuring height",
      "router → changing wallpaper"
    ],
    "a": "router → direct network traffic",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0231",
    "category": "TECH",
    "q": "In CarbonVScode, what is CPU mainly used for?",
    "options": [
      "execute instructions",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "execute instructions",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0232",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what CPU does. Which answer saves the round?",
    "options": [
      "execute instructions",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "execute instructions",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0233",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "CPU → execute instructions",
      "CPU → cooking food",
      "CPU → measuring height",
      "CPU → changing wallpaper"
    ],
    "a": "CPU → execute instructions",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0234",
    "category": "TECH",
    "q": "In a college tech challenge, what is RAM mainly used for?",
    "options": [
      "hold temporary working data",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "hold temporary working data",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0235",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what RAM does. Which answer saves the round?",
    "options": [
      "hold temporary working data",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "hold temporary working data",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0236",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "RAM → hold temporary working data",
      "RAM → cooking food",
      "RAM → measuring height",
      "RAM → changing wallpaper"
    ],
    "a": "RAM → hold temporary working data",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0237",
    "category": "TECH",
    "q": "Five minutes before the demo, what is SSD mainly used for?",
    "options": [
      "store files",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "store files",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0238",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what SSD does. Which answer saves the round?",
    "options": [
      "store files",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "store files",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0239",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "SSD → store files",
      "SSD → cooking food",
      "SSD → measuring height",
      "SSD → changing wallpaper"
    ],
    "a": "SSD → store files",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0240",
    "category": "TECH",
    "q": "Your team is playing and what is keyboard mainly used for?",
    "options": [
      "type text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "type text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0241",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what keyboard does. Which answer saves the round?",
    "options": [
      "type text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "type text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0242",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "keyboard → type text",
      "keyboard → cooking food",
      "keyboard → measuring height",
      "keyboard → changing wallpaper"
    ],
    "a": "keyboard → type text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0243",
    "category": "TECH",
    "q": "During a 30-second round, what is mouse mainly used for?",
    "options": [
      "control the pointer",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "control the pointer",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0244",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what mouse does. Which answer saves the round?",
    "options": [
      "control the pointer",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "control the pointer",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0245",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "mouse → control the pointer",
      "mouse → cooking food",
      "mouse → measuring height",
      "mouse → changing wallpaper"
    ],
    "a": "mouse → control the pointer",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0246",
    "category": "TECH",
    "q": "In CarbonVScode, what is monitor mainly used for?",
    "options": [
      "display visuals",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "display visuals",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0247",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what monitor does. Which answer saves the round?",
    "options": [
      "display visuals",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "display visuals",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0248",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "monitor → display visuals",
      "monitor → cooking food",
      "monitor → measuring height",
      "monitor → changing wallpaper"
    ],
    "a": "monitor → display visuals",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0249",
    "category": "LOGIC",
    "q": "In a college tech challenge, which number comes next: 3, 6, 12, 24, __?",
    "options": [
      "36",
      "48",
      "30",
      "42"
    ],
    "a": "48",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0250",
    "category": "LOGIC",
    "q": "Your team is playing and which number comes next: 5, 10, 15, 20, __?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0251",
    "category": "LOGIC",
    "q": "In CarbonVScode, which number comes next: 1, 4, 9, 16, __?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0252",
    "category": "LOGIC",
    "q": "Five minutes before the demo, if 4 friends split 20 chocolates equally, each gets:",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "a": "5",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0253",
    "category": "LOGIC",
    "q": "During a 30-second round, if a challenge gives 10 points and you answer twice correctly, you earn:",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "a": "20",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0254",
    "category": "LOGIC",
    "q": "In a college tech challenge, if a timer starts at 60 seconds and 15 seconds pass, it shows:",
    "options": [
      "45",
      "50",
      "55",
      "75"
    ],
    "a": "45",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0255",
    "category": "LOGIC",
    "q": "Your team is playing and which is the odd one out?",
    "options": [
      "Circle",
      "Triangle",
      "Square",
      "Keyboard"
    ],
    "a": "Keyboard",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0256",
    "category": "LOGIC",
    "q": "In CarbonVScode, which is the odd one out?",
    "options": [
      "Chrome",
      "Firefox",
      "Edge",
      "Excel"
    ],
    "a": "Excel",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0257",
    "category": "LOGIC",
    "q": "Five minutes before the demo, if today is Friday, tomorrow is:",
    "options": [
      "Thursday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "a": "Saturday",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0258",
    "category": "LOGIC",
    "q": "During a 30-second round, if 2 teams each have 4 players, total players are:",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "a": "8",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0259",
    "category": "AI",
    "q": "In a college tech challenge, which prompt sounds most useful for a beginner?",
    "options": [
      "Explain recursion with a simple real-life example",
      "Explain recursion using maximum jargon",
      "Do recursion",
      "Recursion!!!"
    ],
    "a": "Explain recursion with a simple real-life example",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0260",
    "category": "AI",
    "q": "Your team is playing and you want an AI to make your sentence funnier. What should you specify?",
    "options": [
      "Funny/casual tone",
      "Your Wi-Fi password",
      "Your OTP",
      "Your battery percentage"
    ],
    "a": "Funny/casual tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0261",
    "category": "AI",
    "q": "In CarbonVScode, you want five event names. The clearest request is:",
    "options": [
      "Give 5 catchy names for a college tech fest",
      "Names",
      "Do something",
      "Help"
    ],
    "a": "Give 5 catchy names for a college tech fest",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0262",
    "category": "AI",
    "q": "Five minutes before the demo, aI gives a very formal answer. You want it casual. You should ask it to change the:",
    "options": [
      "Tone",
      "CPU",
      "RAM",
      "QR code"
    ],
    "a": "Tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0263",
    "category": "AI",
    "q": "During a 30-second round, you want an AI answer in a table. What should you specify?",
    "options": [
      "Output format",
      "Phone model",
      "Wallpaper",
      "Ringtone"
    ],
    "a": "Output format",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0264",
    "category": "AI",
    "q": "In a college tech challenge, which is the funniest but still useful AI request?",
    "options": [
      "Explain my timetable like a movie villain",
      "Give me an OTP",
      "Guess my password",
      "Reveal private messages"
    ],
    "a": "Explain my timetable like a movie villain",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0265",
    "category": "FUN TECH",
    "q": "Your team is playing and your laptop freezes 2 minutes before submission. What is the classic first move?",
    "options": [
      "Restart it",
      "Compliment it",
      "Unplug Wi-Fi",
      "Cry"
    ],
    "a": "Restart it",
    "explanation": "Classic emergency move."
  },
  {
    "id": "CV-0266",
    "category": "FUN TECH",
    "q": "In CarbonVScode, you accidentally close a tab you needed. Which shortcut helps?",
    "options": [
      "Ctrl + Shift + T",
      "Ctrl + P",
      "Alt + F4",
      "Ctrl + Q"
    ],
    "a": "Ctrl + Shift + T",
    "explanation": "It reopens the last closed tab."
  },
  {
    "id": "CV-0267",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, you have 47 browser tabs open. Your laptop is probably:",
    "options": [
      "Thriving",
      "Questioning its life",
      "Fully charged",
      "On airplane mode"
    ],
    "a": "Questioning its life",
    "explanation": "47 tabs is a cry for help."
  },
  {
    "id": "CV-0268",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate says, 'Trust me, I know what I'm doing.' What happens next?",
    "options": [
      "Everything works",
      "Nothing works",
      "Someone opens YouTube",
      "All of these"
    ],
    "a": "All of these",
    "explanation": "College project probability."
  },
  {
    "id": "CV-0269",
    "category": "FUN TECH",
    "q": "In a college tech challenge, you type 'final_final_REAL_final.pptx'. What does this suggest?",
    "options": [
      "There are more versions",
      "It is definitely final",
      "It is empty",
      "It is a video"
    ],
    "a": "There are more versions",
    "explanation": "We all know this naming system."
  },
  {
    "id": "CV-0270",
    "category": "FUN TECH",
    "q": "Your team is playing and your phone is at 1% and the charger is across the room. Biggest enemy?",
    "options": [
      "Physics",
      "Distance",
      "Your laziness",
      "The charger"
    ],
    "a": "Your laziness",
    "explanation": "The hostel final boss."
  },
  {
    "id": "CV-0271",
    "category": "FUN TECH",
    "q": "In CarbonVScode, a QR code is not scanning. What should you try first?",
    "options": [
      "Move/adjust the camera",
      "Throw the phone",
      "Delete the browser",
      "Change team name"
    ],
    "a": "Move/adjust the camera",
    "explanation": "Distance and focus matter."
  },
  {
    "id": "CV-0272",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, which message causes instant group-chat panic?",
    "options": [
      "Guys, important announcement",
      "Okay",
      "Thanks",
      "Good morning"
    ],
    "a": "Guys, important announcement",
    "explanation": "Everyone suddenly becomes active."
  },
  {
    "id": "CV-0273",
    "category": "FUN TECH",
    "q": "During a 30-second round, you submit an assignment and immediately notice a typo. Your reaction?",
    "options": [
      "Regret",
      "Victory",
      "Sleep",
      "Bluetooth"
    ],
    "a": "Regret",
    "explanation": "The typo always appears after Submit."
  },
  {
    "id": "CV-0274",
    "category": "FUN TECH",
    "q": "In a college tech challenge, the projector says 'No Signal.' What should you check first?",
    "options": [
      "Cable/input source",
      "Attendance",
      "Weather",
      "Class timetable"
    ],
    "a": "Cable/input source",
    "explanation": "The display connection/source is the obvious first check."
  },
  {
    "id": "CV-0275",
    "category": "LOGIC",
    "q": "Your team is playing and a bat and ball cost ₹110 together. The bat costs ₹100 more. The ball costs:",
    "options": [
      "₹5",
      "₹10",
      "₹15",
      "₹20"
    ],
    "a": "₹5",
    "explanation": "₹5 + ₹105 = ₹110."
  },
  {
    "id": "CV-0276",
    "category": "LOGIC",
    "q": "In CarbonVScode, you overtake the person in second place. You are now:",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "a": "Second",
    "explanation": "You take their position."
  },
  {
    "id": "CV-0277",
    "category": "LOGIC",
    "q": "Five minutes before the demo, a farmer has 10 sheep. All but 3 run away. How many remain?",
    "options": [
      "3",
      "7",
      "10",
      "0"
    ],
    "a": "3",
    "explanation": "All but 3 means 3 remain."
  },
  {
    "id": "CV-0278",
    "category": "LOGIC",
    "q": "During a 30-second round, which comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "a": "32",
    "explanation": "The numbers double."
  },
  {
    "id": "CV-0279",
    "category": "LOGIC",
    "q": "In a college tech challenge, which is heavier: 1 kg iron or 1 kg cotton?",
    "options": [
      "Iron",
      "Cotton",
      "Same",
      "Depends on weather"
    ],
    "a": "Same",
    "explanation": "A kilogram is a kilogram."
  },
  {
    "id": "CV-0280",
    "category": "LOGIC",
    "q": "Your team is playing and you have one match and enter a dark room with a candle, lamp and stove. What do you light first?",
    "options": [
      "Candle",
      "Lamp",
      "Stove",
      "Match"
    ],
    "a": "Match",
    "explanation": "You need the match lit first."
  },
  {
    "id": "CV-0281",
    "category": "LOGIC",
    "q": "In CarbonVScode, if yesterday was Monday, tomorrow is:",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "a": "Wednesday",
    "explanation": "Today is Tuesday."
  },
  {
    "id": "CV-0282",
    "category": "LOGIC",
    "q": "Five minutes before the demo, a clock shows 3:00. The angle between its hands is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": "90°",
    "explanation": "The hands are perpendicular."
  },
  {
    "id": "CV-0283",
    "category": "LOGIC",
    "q": "During a 30-second round, a father and son are in an accident. The father dies. The surgeon says, 'He's my son.' The surgeon is:",
    "options": [
      "His mother",
      "His uncle",
      "His sister",
      "His teacher"
    ],
    "a": "His mother",
    "explanation": "The riddle challenges an assumption."
  },
  {
    "id": "CV-0284",
    "category": "LOGIC",
    "q": "In a college tech challenge, which does NOT belong: Apple, Mango, Banana, Carrot?",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "a": "Carrot",
    "explanation": "Carrot is generally classified as a vegetable."
  },
  {
    "id": "CV-0285",
    "category": "AI",
    "q": "Your team is playing and you ask AI to make a 2-page answer and it gives 12 pages. What do you say?",
    "options": [
      "Make it shorter",
      "Print everything",
      "Delete the AI",
      "Ask for 50 more pages"
    ],
    "a": "Make it shorter",
    "explanation": "You can refine the prompt."
  },
  {
    "id": "CV-0286",
    "category": "AI",
    "q": "In CarbonVScode, which prompt is more specific?",
    "options": [
      "Make something cool",
      "Make a blue poster for a college coding event with a QR area",
      "Do it",
      "Poster pls"
    ],
    "a": "Make a blue poster for a college coding event with a QR area",
    "explanation": "Specific instructions help."
  },
  {
    "id": "CV-0287",
    "category": "AI",
    "q": "Five minutes before the demo, aI confidently gives a false fact. This can be called:",
    "options": [
      "Hallucination",
      "Charging",
      "Caching",
      "Streaming"
    ],
    "a": "Hallucination",
    "explanation": "AI can generate unsupported information."
  },
  {
    "id": "CV-0288",
    "category": "AI",
    "q": "During a 30-second round, you want AI to explain a topic to a beginner. You should ask for:",
    "options": [
      "A simple explanation",
      "More jargon",
      "A password",
      "A spreadsheet"
    ],
    "a": "A simple explanation",
    "explanation": "Tell it the audience and difficulty."
  },
  {
    "id": "CV-0289",
    "category": "AI",
    "q": "In a college tech challenge, which is a good use of AI for a fresher?",
    "options": [
      "Brainstorming ideas",
      "Sharing OTPs",
      "Sharing passwords",
      "Revealing private data"
    ],
    "a": "Brainstorming ideas",
    "explanation": "AI can help with creative work."
  },
  {
    "id": "CV-0290",
    "category": "AI",
    "q": "Your team is playing and you want exactly 3 caption ideas. Why say '3'?",
    "options": [
      "It sets an output limit",
      "It improves battery",
      "It changes keyboard",
      "It boosts Wi-Fi"
    ],
    "a": "It sets an output limit",
    "explanation": "Clear constraints help."
  },
  {
    "id": "CV-0291",
    "category": "AI",
    "q": "In CarbonVScode, aI writes code you do not understand. Before using it, you should:",
    "options": [
      "Read/test/understand it",
      "Run blindly",
      "Send it everywhere",
      "Delete your editor"
    ],
    "a": "Read/test/understand it",
    "explanation": "Generated code still needs checking."
  },
  {
    "id": "CV-0292",
    "category": "AI",
    "q": "Five minutes before the demo, aI says 'I am 100% certain.' You should:",
    "options": [
      "Verify important facts",
      "Believe it automatically",
      "Screenshot it",
      "Ask for an OTP"
    ],
    "a": "Verify important facts",
    "explanation": "Confidence is not proof."
  },
  {
    "id": "CV-0293",
    "category": "AI",
    "q": "During a 30-second round, which is a creative AI task?",
    "options": [
      "Generate a fictional superhero name",
      "Guess an OTP",
      "Reveal a password",
      "Find private messages"
    ],
    "a": "Generate a fictional superhero name",
    "explanation": "Creative generation is a normal use."
  },
  {
    "id": "CV-0294",
    "category": "AI",
    "q": "In a college tech challenge, you want a formal email rewritten casually. What should you specify?",
    "options": [
      "Tone",
      "Battery",
      "Wi-Fi password",
      "Screen size"
    ],
    "a": "Tone",
    "explanation": "Tone controls how the writing sounds."
  },
  {
    "id": "CV-0295",
    "category": "TECH",
    "q": "Your team is playing and what does Ctrl + C usually do?",
    "options": [
      "Copy",
      "Cut",
      "Close",
      "Compile"
    ],
    "a": "Copy",
    "explanation": "It copies selected content."
  },
  {
    "id": "CV-0296",
    "category": "TECH",
    "q": "In CarbonVScode, what does Ctrl + V usually do?",
    "options": [
      "Paste",
      "Print",
      "Undo",
      "Zoom"
    ],
    "a": "Paste",
    "explanation": "It pastes copied/cut content."
  },
  {
    "id": "CV-0297",
    "category": "TECH",
    "q": "Five minutes before the demo, which is commonly used for permanent file storage?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "GPU"
    ],
    "a": "SSD",
    "explanation": "SSD stores data when power is off."
  },
  {
    "id": "CV-0298",
    "category": "TECH",
    "q": "During a 30-second round, which is often called the 'brain' of a computer?",
    "options": [
      "CPU",
      "Mouse",
      "Monitor",
      "Keyboard"
    ],
    "a": "CPU",
    "explanation": "The CPU executes instructions."
  },
  {
    "id": "CV-0299",
    "category": "TECH",
    "q": "In a college tech challenge, wi-Fi mainly provides:",
    "options": [
      "Wireless network connectivity",
      "Extra battery",
      "More storage",
      "Brighter screen"
    ],
    "a": "Wireless network connectivity",
    "explanation": "Wi-Fi connects devices wirelessly."
  },
  {
    "id": "CV-0300",
    "category": "TECH",
    "q": "Your team is playing and which device displays images?",
    "options": [
      "Monitor",
      "Keyboard",
      "Router",
      "Microphone"
    ],
    "a": "Monitor",
    "explanation": "The monitor displays visual output."
  },
  {
    "id": "CV-0301",
    "category": "TECH",
    "q": "In CarbonVScode, which device is mainly used for typing?",
    "options": [
      "Keyboard",
      "Speaker",
      "Router",
      "Webcam"
    ],
    "a": "Keyboard",
    "explanation": "Keyboard input is used for typing."
  },
  {
    "id": "CV-0302",
    "category": "TECH",
    "q": "Five minutes before the demo, a QR code usually contains:",
    "options": [
      "Encoded information",
      "Electricity",
      "Battery power",
      "Sound waves"
    ],
    "a": "Encoded information",
    "explanation": "A scanner reads the encoded information."
  },
  {
    "id": "CV-0303",
    "category": "TECH",
    "q": "During a 30-second round, which is a web browser?",
    "options": [
      "Chrome",
      "Python",
      "Windows",
      "Bluetooth"
    ],
    "a": "Chrome",
    "explanation": "Chrome is a browser."
  },
  {
    "id": "CV-0304",
    "category": "TECH",
    "q": "In a college tech challenge, which is an operating system?",
    "options": [
      "Windows",
      "Google",
      "Wi-Fi",
      "USB"
    ],
    "a": "Windows",
    "explanation": "Windows is an operating system."
  },
  {
    "id": "CV-0305",
    "category": "DETECTIVE",
    "q": "Your team is playing and a clue says 'I have keys but no locks.' What am I?",
    "options": [
      "Keyboard",
      "Door",
      "Suitcase",
      "Map"
    ],
    "a": "Keyboard",
    "explanation": "A keyboard has keys, not locks."
  },
  {
    "id": "CV-0306",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a clue says 'I get wetter as I dry.' What am I?",
    "options": [
      "Towel",
      "Cloud",
      "Sponge",
      "Umbrella"
    ],
    "a": "Towel",
    "explanation": "A towel gets wet while drying something."
  },
  {
    "id": "CV-0307",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a clue says 'I have a face and two hands but no arms.' What am I?",
    "options": [
      "Clock",
      "Robot",
      "Mirror",
      "Phone"
    ],
    "a": "Clock",
    "explanation": "A clock has a face and hands."
  },
  {
    "id": "CV-0308",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a note says 3-15-4-5. Using A=1, B=2, it spells:",
    "options": [
      "CODE",
      "COLD",
      "DECO",
      "BODE"
    ],
    "a": "CODE",
    "explanation": "3=C, 15=O, 4=D, 5=E."
  },
  {
    "id": "CV-0309",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a suspect says they were in the library. A timestamped photo places them elsewhere. This is:",
    "options": [
      "A contradiction to investigate",
      "Automatic proof of guilt",
      "A Wi-Fi issue",
      "A password"
    ],
    "a": "A contradiction to investigate",
    "explanation": "Conflicting evidence deserves investigation."
  },
  {
    "id": "CV-0310",
    "category": "DETECTIVE",
    "q": "Your team is playing and a clue says 'first letters matter.' What should you inspect?",
    "options": [
      "First letters of relevant words",
      "Last page only",
      "Battery",
      "Wallpaper"
    ],
    "a": "First letters of relevant words",
    "explanation": "The clue tells you where to look."
  },
  {
    "id": "CV-0311",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a mystery message says 'READ BETWEEN THE LINES.' You should inspect:",
    "options": [
      "Hidden text/spacing",
      "Battery health",
      "Phone case",
      "Wi-Fi speed"
    ],
    "a": "Hidden text/spacing",
    "explanation": "The wording suggests hidden information."
  },
  {
    "id": "CV-0312",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a file named FINAL was modified after submission. What is useful to inspect?",
    "options": [
      "File history/metadata",
      "Keyboard",
      "Wallpaper",
      "Speaker"
    ],
    "a": "File history/metadata",
    "explanation": "Metadata can provide timing clues."
  },
  {
    "id": "CV-0313",
    "category": "DETECTIVE",
    "q": "During a 30-second round, two explanations fit the clues. What should a detective do?",
    "options": [
      "Find a clue that separates them",
      "Guess",
      "Stop",
      "Choose the funniest"
    ],
    "a": "Find a clue that separates them",
    "explanation": "Good investigation seeks distinguishing evidence."
  },
  {
    "id": "CV-0314",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a detective finds a suspicious USB. First step?",
    "options": [
      "Inspect it without altering evidence",
      "Format it",
      "Throw it away",
      "Guess"
    ],
    "a": "Inspect it without altering evidence",
    "explanation": "Preserve evidence while checking it."
  },
  {
    "id": "CV-0315",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and professor says 'This will be easy.' Your safest move?",
    "options": [
      "Open your notebook",
      "Celebrate",
      "Leave",
      "Sleep"
    ],
    "a": "Open your notebook",
    "explanation": "Never underestimate that sentence."
  },
  {
    "id": "CV-0316",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, which item mysteriously disappears in hostels?",
    "options": [
      "Charger",
      "Ceiling",
      "Bed",
      "Building"
    ],
    "a": "Charger",
    "explanation": "Chargers travel mysteriously."
  },
  {
    "id": "CV-0317",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, your roommate says '5 minutes' after an alarm. Usually:",
    "options": [
      "The timeline is optimistic",
      "Exactly 5 minutes",
      "They are outside",
      "Semester ended"
    ],
    "a": "The timeline is optimistic",
    "explanation": "'Five minutes' is flexible."
  },
  {
    "id": "CV-0318",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, your team has 30 seconds left. Worst strategy?",
    "options": [
      "Argue about the font",
      "Answer",
      "Read the question",
      "Split tasks"
    ],
    "a": "Argue about the font",
    "explanation": "Priorities!"
  },
  {
    "id": "CV-0319",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, someone asks, 'Who has the PPT?' Five minutes before presenting. Your first goal?",
    "options": [
      "Find the actual file",
      "Change wallpaper",
      "Open Bluetooth",
      "Rename laptop"
    ],
    "a": "Find the actual file",
    "explanation": "Locate the presentation quickly."
  },
  {
    "id": "CV-0320",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and you have an 8 AM class after sleeping at 3 AM. Best long-term fix?",
    "options": [
      "Sleep earlier when possible",
      "Set 20 alarms and ignore them",
      "Drink only cola",
      "Blame the moon"
    ],
    "a": "Sleep earlier when possible",
    "explanation": "Sleep helps mornings."
  },
  {
    "id": "CV-0321",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, your teammate says 'I was mentally contributing.' Best response?",
    "options": [
      "Ask for their actual task/result",
      "Give them all points",
      "Delete project",
      "Turn off lights"
    ],
    "a": "Ask for their actual task/result",
    "explanation": "Teams need actual contributions."
  },
  {
    "id": "CV-0322",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, the canteen queue is huge. A simple strategy is:",
    "options": [
      "Choose a less crowded option/time",
      "Debug the queue",
      "Turn on Bluetooth",
      "Refresh browser"
    ],
    "a": "Choose a less crowded option/time",
    "explanation": "Simple queue management."
  },
  {
    "id": "CV-0323",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, your assignment is due in 10 minutes and the file is missing. First:",
    "options": [
      "Search for the filename",
      "Change ringtone",
      "Restart the monitor",
      "Open Instagram"
    ],
    "a": "Search for the filename",
    "explanation": "Search before panicking."
  },
  {
    "id": "CV-0324",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, someone says 'Bro trust me, I watched one tutorial.' Your reaction?",
    "options": [
      "Check the result",
      "Give them admin access",
      "Delete everything",
      "Close the laptop"
    ],
    "a": "Check the result",
    "explanation": "Tutorial knowledge still needs testing."
  },
  {
    "id": "CV-0325",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and which would be the worst password?",
    "options": [
      "password123",
      "A unique passphrase",
      "A random generated password",
      "A long unique password"
    ],
    "a": "password123",
    "explanation": "It is predictable."
  },
  {
    "id": "CV-0326",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, your calculator says 2+2=5. First assumption?",
    "options": [
      "Something is wrong",
      "Math changed",
      "Semester ended",
      "Calculator became philosophical"
    ],
    "a": "Something is wrong",
    "explanation": "Check the input/calculator."
  },
  {
    "id": "CV-0327",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, which is most likely to have a mute button?",
    "options": [
      "Remote control",
      "Notebook",
      "Water bottle",
      "Backpack"
    ],
    "a": "Remote control",
    "explanation": "Remotes commonly control audio."
  },
  {
    "id": "CV-0328",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, your laptop fan sounds like a helicopter. You should probably:",
    "options": [
      "Check what is running/heat",
      "Open more tabs",
      "Put it under a pillow",
      "Ignore it"
    ],
    "a": "Check what is running/heat",
    "explanation": "High workload or heat can make fans loud."
  },
  {
    "id": "CV-0329",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, which sounds like a fake tech startup?",
    "options": [
      "Quantum Banana",
      "Microsoft",
      "Mozilla",
      "Google"
    ],
    "a": "Quantum Banana",
    "explanation": "It sounds invented."
  },
  {
    "id": "CV-0330",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and your phone falls face-down. First thing you check?",
    "options": [
      "The screen",
      "Weather",
      "Wi-Fi password",
      "Attendance"
    ],
    "a": "The screen",
    "explanation": "Immediate survival check."
  },
  {
    "id": "CV-0331",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, which is most likely an image file?",
    "options": [
      ".jpg",
      ".mp4",
      ".txt",
      ".csv"
    ],
    "a": ".jpg",
    "explanation": "JPG is an image format."
  },
  {
    "id": "CV-0332",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, which is most likely a video file?",
    "options": [
      ".mp4",
      ".txt",
      ".jpg",
      ".csv"
    ],
    "a": ".mp4",
    "explanation": "MP4 is a common video format."
  },
  {
    "id": "CV-0333",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, which sounds most like internet slang?",
    "options": [
      "LOL",
      "RAM",
      "CPU",
      "HTTP"
    ],
    "a": "LOL",
    "explanation": "LOL is common online slang."
  },
  {
    "id": "CV-0334",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, a mysterious software error appears. Most useful first move?",
    "options": [
      "Search the exact error",
      "Increase brightness",
      "Rename laptop",
      "Change ringtone"
    ],
    "a": "Search the exact error",
    "explanation": "The error text often gives useful clues."
  },
  {
    "id": "CV-0335",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which key usually starts a new line?",
    "options": [
      "Enter",
      "Shift",
      "Ctrl",
      "Esc"
    ],
    "a": "Enter",
    "explanation": "Enter starts a new line."
  },
  {
    "id": "CV-0336",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which symbol is common in email addresses?",
    "options": [
      "@",
      "#",
      "$",
      "%"
    ],
    "a": "@",
    "explanation": "It separates the username and domain."
  },
  {
    "id": "CV-0337",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which is a search engine?",
    "options": [
      "Google",
      "Bluetooth",
      "Windows",
      "USB"
    ],
    "a": "Google",
    "explanation": "Google is a search engine."
  },
  {
    "id": "CV-0338",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which is a social media platform?",
    "options": [
      "Instagram",
      "HDMI",
      "SSD",
      "RAM"
    ],
    "a": "Instagram",
    "explanation": "Instagram is a social platform."
  },
  {
    "id": "CV-0339",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which is commonly used to listen to audio?",
    "options": [
      "Headphones",
      "Router",
      "Mouse pad",
      "Webcam"
    ],
    "a": "Headphones",
    "explanation": "They output audio."
  },
  {
    "id": "CV-0340",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which key often cancels/escapes an action?",
    "options": [
      "Esc",
      "Tab",
      "Caps Lock",
      "Space"
    ],
    "a": "Esc",
    "explanation": "Esc commonly means escape/cancel."
  },
  {
    "id": "CV-0341",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which key can make letters uppercase while held?",
    "options": [
      "Shift",
      "Alt",
      "Tab",
      "Enter"
    ],
    "a": "Shift",
    "explanation": "Shift modifies letter case."
  },
  {
    "id": "CV-0342",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, what does 'app' usually mean?",
    "options": [
      "Application",
      "Apple password",
      "Audio printer program",
      "Automatic pixel"
    ],
    "a": "Application",
    "explanation": "App is short for application."
  },
  {
    "id": "CV-0343",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which is larger?",
    "options": [
      "1 GB",
      "1 MB",
      "1 KB",
      "1 byte"
    ],
    "a": "1 GB",
    "explanation": "GB is larger than MB and KB."
  },
  {
    "id": "CV-0344",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which is a plain-text file extension?",
    "options": [
      ".txt",
      ".mp4",
      ".png",
      ".mp3"
    ],
    "a": ".txt",
    "explanation": "TXT commonly stores plain text."
  },
  {
    "id": "CV-0345",
    "category": "TECH",
    "q": "Your team is playing and what is Ctrl + Z mainly used for?",
    "options": [
      "undo your last action",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "undo your last action",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0346",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what Ctrl + Z does. Which answer saves the round?",
    "options": [
      "undo your last action",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "undo your last action",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0347",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "Ctrl + Z → undo your last action",
      "Ctrl + Z → cooking food",
      "Ctrl + Z → measuring height",
      "Ctrl + Z → changing wallpaper"
    ],
    "a": "Ctrl + Z → undo your last action",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0348",
    "category": "TECH",
    "q": "During a 30-second round, what is Ctrl + S mainly used for?",
    "options": [
      "save your work",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "save your work",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0349",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what Ctrl + S does. Which answer saves the round?",
    "options": [
      "save your work",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "save your work",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0350",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "Ctrl + S → save your work",
      "Ctrl + S → cooking food",
      "Ctrl + S → measuring height",
      "Ctrl + S → changing wallpaper"
    ],
    "a": "Ctrl + S → save your work",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0351",
    "category": "TECH",
    "q": "In CarbonVScode, what is Ctrl + F mainly used for?",
    "options": [
      "find text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "find text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0352",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what Ctrl + F does. Which answer saves the round?",
    "options": [
      "find text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "find text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0353",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "Ctrl + F → find text",
      "Ctrl + F → cooking food",
      "Ctrl + F → measuring height",
      "Ctrl + F → changing wallpaper"
    ],
    "a": "Ctrl + F → find text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0354",
    "category": "TECH",
    "q": "In a college tech challenge, what is QR code mainly used for?",
    "options": [
      "encode information",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "encode information",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0355",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what QR code does. Which answer saves the round?",
    "options": [
      "encode information",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "encode information",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0356",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "QR code → encode information",
      "QR code → cooking food",
      "QR code → measuring height",
      "QR code → changing wallpaper"
    ],
    "a": "QR code → encode information",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0357",
    "category": "TECH",
    "q": "Five minutes before the demo, what is browser mainly used for?",
    "options": [
      "open websites",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "open websites",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0358",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what browser does. Which answer saves the round?",
    "options": [
      "open websites",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "open websites",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0359",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "browser → open websites",
      "browser → cooking food",
      "browser → measuring height",
      "browser → changing wallpaper"
    ],
    "a": "browser → open websites",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0360",
    "category": "TECH",
    "q": "Your team is playing and what is router mainly used for?",
    "options": [
      "direct network traffic",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "direct network traffic",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0361",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what router does. Which answer saves the round?",
    "options": [
      "direct network traffic",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "direct network traffic",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0362",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "router → direct network traffic",
      "router → cooking food",
      "router → measuring height",
      "router → changing wallpaper"
    ],
    "a": "router → direct network traffic",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0363",
    "category": "TECH",
    "q": "During a 30-second round, what is CPU mainly used for?",
    "options": [
      "execute instructions",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "execute instructions",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0364",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what CPU does. Which answer saves the round?",
    "options": [
      "execute instructions",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "execute instructions",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0365",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "CPU → execute instructions",
      "CPU → cooking food",
      "CPU → measuring height",
      "CPU → changing wallpaper"
    ],
    "a": "CPU → execute instructions",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0366",
    "category": "TECH",
    "q": "In CarbonVScode, what is RAM mainly used for?",
    "options": [
      "hold temporary working data",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "hold temporary working data",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0367",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what RAM does. Which answer saves the round?",
    "options": [
      "hold temporary working data",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "hold temporary working data",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0368",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "RAM → hold temporary working data",
      "RAM → cooking food",
      "RAM → measuring height",
      "RAM → changing wallpaper"
    ],
    "a": "RAM → hold temporary working data",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0369",
    "category": "TECH",
    "q": "In a college tech challenge, what is SSD mainly used for?",
    "options": [
      "store files",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "store files",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0370",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what SSD does. Which answer saves the round?",
    "options": [
      "store files",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "store files",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0371",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "SSD → store files",
      "SSD → cooking food",
      "SSD → measuring height",
      "SSD → changing wallpaper"
    ],
    "a": "SSD → store files",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0372",
    "category": "TECH",
    "q": "Five minutes before the demo, what is keyboard mainly used for?",
    "options": [
      "type text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "type text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0373",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what keyboard does. Which answer saves the round?",
    "options": [
      "type text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "type text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0374",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "keyboard → type text",
      "keyboard → cooking food",
      "keyboard → measuring height",
      "keyboard → changing wallpaper"
    ],
    "a": "keyboard → type text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0375",
    "category": "TECH",
    "q": "Your team is playing and what is mouse mainly used for?",
    "options": [
      "control the pointer",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "control the pointer",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0376",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what mouse does. Which answer saves the round?",
    "options": [
      "control the pointer",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "control the pointer",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0377",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "mouse → control the pointer",
      "mouse → cooking food",
      "mouse → measuring height",
      "mouse → changing wallpaper"
    ],
    "a": "mouse → control the pointer",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0378",
    "category": "TECH",
    "q": "During a 30-second round, what is monitor mainly used for?",
    "options": [
      "display visuals",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "display visuals",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0379",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what monitor does. Which answer saves the round?",
    "options": [
      "display visuals",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "display visuals",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0380",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "monitor → display visuals",
      "monitor → cooking food",
      "monitor → measuring height",
      "monitor → changing wallpaper"
    ],
    "a": "monitor → display visuals",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0381",
    "category": "LOGIC",
    "q": "In CarbonVScode, which number comes next: 3, 6, 12, 24, __?",
    "options": [
      "36",
      "48",
      "30",
      "42"
    ],
    "a": "48",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0382",
    "category": "LOGIC",
    "q": "Five minutes before the demo, which number comes next: 5, 10, 15, 20, __?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0383",
    "category": "LOGIC",
    "q": "During a 30-second round, which number comes next: 1, 4, 9, 16, __?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0384",
    "category": "LOGIC",
    "q": "In a college tech challenge, if 4 friends split 20 chocolates equally, each gets:",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "a": "5",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0385",
    "category": "LOGIC",
    "q": "Your team is playing and if a challenge gives 10 points and you answer twice correctly, you earn:",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "a": "20",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0386",
    "category": "LOGIC",
    "q": "In CarbonVScode, if a timer starts at 60 seconds and 15 seconds pass, it shows:",
    "options": [
      "45",
      "50",
      "55",
      "75"
    ],
    "a": "45",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0387",
    "category": "LOGIC",
    "q": "Five minutes before the demo, which is the odd one out?",
    "options": [
      "Circle",
      "Triangle",
      "Square",
      "Keyboard"
    ],
    "a": "Keyboard",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0388",
    "category": "LOGIC",
    "q": "During a 30-second round, which is the odd one out?",
    "options": [
      "Chrome",
      "Firefox",
      "Edge",
      "Excel"
    ],
    "a": "Excel",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0389",
    "category": "LOGIC",
    "q": "In a college tech challenge, if today is Friday, tomorrow is:",
    "options": [
      "Thursday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "a": "Saturday",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0390",
    "category": "LOGIC",
    "q": "Your team is playing and if 2 teams each have 4 players, total players are:",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "a": "8",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0391",
    "category": "AI",
    "q": "In CarbonVScode, which prompt sounds most useful for a beginner?",
    "options": [
      "Explain recursion with a simple real-life example",
      "Explain recursion using maximum jargon",
      "Do recursion",
      "Recursion!!!"
    ],
    "a": "Explain recursion with a simple real-life example",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0392",
    "category": "AI",
    "q": "Five minutes before the demo, you want an AI to make your sentence funnier. What should you specify?",
    "options": [
      "Funny/casual tone",
      "Your Wi-Fi password",
      "Your OTP",
      "Your battery percentage"
    ],
    "a": "Funny/casual tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0393",
    "category": "AI",
    "q": "During a 30-second round, you want five event names. The clearest request is:",
    "options": [
      "Give 5 catchy names for a college tech fest",
      "Names",
      "Do something",
      "Help"
    ],
    "a": "Give 5 catchy names for a college tech fest",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0394",
    "category": "AI",
    "q": "In a college tech challenge, aI gives a very formal answer. You want it casual. You should ask it to change the:",
    "options": [
      "Tone",
      "CPU",
      "RAM",
      "QR code"
    ],
    "a": "Tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0395",
    "category": "AI",
    "q": "Your team is playing and you want an AI answer in a table. What should you specify?",
    "options": [
      "Output format",
      "Phone model",
      "Wallpaper",
      "Ringtone"
    ],
    "a": "Output format",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0396",
    "category": "AI",
    "q": "In CarbonVScode, which is the funniest but still useful AI request?",
    "options": [
      "Explain my timetable like a movie villain",
      "Give me an OTP",
      "Guess my password",
      "Reveal private messages"
    ],
    "a": "Explain my timetable like a movie villain",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0397",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your laptop freezes 2 minutes before submission. What is the classic first move?",
    "options": [
      "Restart it",
      "Compliment it",
      "Unplug Wi-Fi",
      "Cry"
    ],
    "a": "Restart it",
    "explanation": "Classic emergency move."
  },
  {
    "id": "CV-0398",
    "category": "FUN TECH",
    "q": "During a 30-second round, you accidentally close a tab you needed. Which shortcut helps?",
    "options": [
      "Ctrl + Shift + T",
      "Ctrl + P",
      "Alt + F4",
      "Ctrl + Q"
    ],
    "a": "Ctrl + Shift + T",
    "explanation": "It reopens the last closed tab."
  },
  {
    "id": "CV-0399",
    "category": "FUN TECH",
    "q": "In a college tech challenge, you have 47 browser tabs open. Your laptop is probably:",
    "options": [
      "Thriving",
      "Questioning its life",
      "Fully charged",
      "On airplane mode"
    ],
    "a": "Questioning its life",
    "explanation": "47 tabs is a cry for help."
  },
  {
    "id": "CV-0400",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate says, 'Trust me, I know what I'm doing.' What happens next?",
    "options": [
      "Everything works",
      "Nothing works",
      "Someone opens YouTube",
      "All of these"
    ],
    "a": "All of these",
    "explanation": "College project probability."
  },
  {
    "id": "CV-0401",
    "category": "FUN TECH",
    "q": "In CarbonVScode, you type 'final_final_REAL_final.pptx'. What does this suggest?",
    "options": [
      "There are more versions",
      "It is definitely final",
      "It is empty",
      "It is a video"
    ],
    "a": "There are more versions",
    "explanation": "We all know this naming system."
  },
  {
    "id": "CV-0402",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your phone is at 1% and the charger is across the room. Biggest enemy?",
    "options": [
      "Physics",
      "Distance",
      "Your laziness",
      "The charger"
    ],
    "a": "Your laziness",
    "explanation": "The hostel final boss."
  },
  {
    "id": "CV-0403",
    "category": "FUN TECH",
    "q": "During a 30-second round, a QR code is not scanning. What should you try first?",
    "options": [
      "Move/adjust the camera",
      "Throw the phone",
      "Delete the browser",
      "Change team name"
    ],
    "a": "Move/adjust the camera",
    "explanation": "Distance and focus matter."
  },
  {
    "id": "CV-0404",
    "category": "FUN TECH",
    "q": "In a college tech challenge, which message causes instant group-chat panic?",
    "options": [
      "Guys, important announcement",
      "Okay",
      "Thanks",
      "Good morning"
    ],
    "a": "Guys, important announcement",
    "explanation": "Everyone suddenly becomes active."
  },
  {
    "id": "CV-0405",
    "category": "FUN TECH",
    "q": "Your team is playing and you submit an assignment and immediately notice a typo. Your reaction?",
    "options": [
      "Regret",
      "Victory",
      "Sleep",
      "Bluetooth"
    ],
    "a": "Regret",
    "explanation": "The typo always appears after Submit."
  },
  {
    "id": "CV-0406",
    "category": "FUN TECH",
    "q": "In CarbonVScode, the projector says 'No Signal.' What should you check first?",
    "options": [
      "Cable/input source",
      "Attendance",
      "Weather",
      "Class timetable"
    ],
    "a": "Cable/input source",
    "explanation": "The display connection/source is the obvious first check."
  },
  {
    "id": "CV-0407",
    "category": "LOGIC",
    "q": "Five minutes before the demo, a bat and ball cost ₹110 together. The bat costs ₹100 more. The ball costs:",
    "options": [
      "₹5",
      "₹10",
      "₹15",
      "₹20"
    ],
    "a": "₹5",
    "explanation": "₹5 + ₹105 = ₹110."
  },
  {
    "id": "CV-0408",
    "category": "LOGIC",
    "q": "During a 30-second round, you overtake the person in second place. You are now:",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "a": "Second",
    "explanation": "You take their position."
  },
  {
    "id": "CV-0409",
    "category": "LOGIC",
    "q": "In a college tech challenge, a farmer has 10 sheep. All but 3 run away. How many remain?",
    "options": [
      "3",
      "7",
      "10",
      "0"
    ],
    "a": "3",
    "explanation": "All but 3 means 3 remain."
  },
  {
    "id": "CV-0410",
    "category": "LOGIC",
    "q": "Your team is playing and which comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "a": "32",
    "explanation": "The numbers double."
  },
  {
    "id": "CV-0411",
    "category": "LOGIC",
    "q": "In CarbonVScode, which is heavier: 1 kg iron or 1 kg cotton?",
    "options": [
      "Iron",
      "Cotton",
      "Same",
      "Depends on weather"
    ],
    "a": "Same",
    "explanation": "A kilogram is a kilogram."
  },
  {
    "id": "CV-0412",
    "category": "LOGIC",
    "q": "Five minutes before the demo, you have one match and enter a dark room with a candle, lamp and stove. What do you light first?",
    "options": [
      "Candle",
      "Lamp",
      "Stove",
      "Match"
    ],
    "a": "Match",
    "explanation": "You need the match lit first."
  },
  {
    "id": "CV-0413",
    "category": "LOGIC",
    "q": "During a 30-second round, if yesterday was Monday, tomorrow is:",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "a": "Wednesday",
    "explanation": "Today is Tuesday."
  },
  {
    "id": "CV-0414",
    "category": "LOGIC",
    "q": "In a college tech challenge, a clock shows 3:00. The angle between its hands is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": "90°",
    "explanation": "The hands are perpendicular."
  },
  {
    "id": "CV-0415",
    "category": "LOGIC",
    "q": "Your team is playing and a father and son are in an accident. The father dies. The surgeon says, 'He's my son.' The surgeon is:",
    "options": [
      "His mother",
      "His uncle",
      "His sister",
      "His teacher"
    ],
    "a": "His mother",
    "explanation": "The riddle challenges an assumption."
  },
  {
    "id": "CV-0416",
    "category": "LOGIC",
    "q": "In CarbonVScode, which does NOT belong: Apple, Mango, Banana, Carrot?",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "a": "Carrot",
    "explanation": "Carrot is generally classified as a vegetable."
  },
  {
    "id": "CV-0417",
    "category": "AI",
    "q": "Five minutes before the demo, you ask AI to make a 2-page answer and it gives 12 pages. What do you say?",
    "options": [
      "Make it shorter",
      "Print everything",
      "Delete the AI",
      "Ask for 50 more pages"
    ],
    "a": "Make it shorter",
    "explanation": "You can refine the prompt."
  },
  {
    "id": "CV-0418",
    "category": "AI",
    "q": "During a 30-second round, which prompt is more specific?",
    "options": [
      "Make something cool",
      "Make a blue poster for a college coding event with a QR area",
      "Do it",
      "Poster pls"
    ],
    "a": "Make a blue poster for a college coding event with a QR area",
    "explanation": "Specific instructions help."
  },
  {
    "id": "CV-0419",
    "category": "AI",
    "q": "In a college tech challenge, aI confidently gives a false fact. This can be called:",
    "options": [
      "Hallucination",
      "Charging",
      "Caching",
      "Streaming"
    ],
    "a": "Hallucination",
    "explanation": "AI can generate unsupported information."
  },
  {
    "id": "CV-0420",
    "category": "AI",
    "q": "Your team is playing and you want AI to explain a topic to a beginner. You should ask for:",
    "options": [
      "A simple explanation",
      "More jargon",
      "A password",
      "A spreadsheet"
    ],
    "a": "A simple explanation",
    "explanation": "Tell it the audience and difficulty."
  },
  {
    "id": "CV-0421",
    "category": "AI",
    "q": "In CarbonVScode, which is a good use of AI for a fresher?",
    "options": [
      "Brainstorming ideas",
      "Sharing OTPs",
      "Sharing passwords",
      "Revealing private data"
    ],
    "a": "Brainstorming ideas",
    "explanation": "AI can help with creative work."
  },
  {
    "id": "CV-0422",
    "category": "AI",
    "q": "Five minutes before the demo, you want exactly 3 caption ideas. Why say '3'?",
    "options": [
      "It sets an output limit",
      "It improves battery",
      "It changes keyboard",
      "It boosts Wi-Fi"
    ],
    "a": "It sets an output limit",
    "explanation": "Clear constraints help."
  },
  {
    "id": "CV-0423",
    "category": "AI",
    "q": "During a 30-second round, aI writes code you do not understand. Before using it, you should:",
    "options": [
      "Read/test/understand it",
      "Run blindly",
      "Send it everywhere",
      "Delete your editor"
    ],
    "a": "Read/test/understand it",
    "explanation": "Generated code still needs checking."
  },
  {
    "id": "CV-0424",
    "category": "AI",
    "q": "In a college tech challenge, aI says 'I am 100% certain.' You should:",
    "options": [
      "Verify important facts",
      "Believe it automatically",
      "Screenshot it",
      "Ask for an OTP"
    ],
    "a": "Verify important facts",
    "explanation": "Confidence is not proof."
  },
  {
    "id": "CV-0425",
    "category": "AI",
    "q": "Your team is playing and which is a creative AI task?",
    "options": [
      "Generate a fictional superhero name",
      "Guess an OTP",
      "Reveal a password",
      "Find private messages"
    ],
    "a": "Generate a fictional superhero name",
    "explanation": "Creative generation is a normal use."
  },
  {
    "id": "CV-0426",
    "category": "AI",
    "q": "In CarbonVScode, you want a formal email rewritten casually. What should you specify?",
    "options": [
      "Tone",
      "Battery",
      "Wi-Fi password",
      "Screen size"
    ],
    "a": "Tone",
    "explanation": "Tone controls how the writing sounds."
  },
  {
    "id": "CV-0427",
    "category": "TECH",
    "q": "Five minutes before the demo, what does Ctrl + C usually do?",
    "options": [
      "Copy",
      "Cut",
      "Close",
      "Compile"
    ],
    "a": "Copy",
    "explanation": "It copies selected content."
  },
  {
    "id": "CV-0428",
    "category": "TECH",
    "q": "During a 30-second round, what does Ctrl + V usually do?",
    "options": [
      "Paste",
      "Print",
      "Undo",
      "Zoom"
    ],
    "a": "Paste",
    "explanation": "It pastes copied/cut content."
  },
  {
    "id": "CV-0429",
    "category": "TECH",
    "q": "In a college tech challenge, which is commonly used for permanent file storage?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "GPU"
    ],
    "a": "SSD",
    "explanation": "SSD stores data when power is off."
  },
  {
    "id": "CV-0430",
    "category": "TECH",
    "q": "Your team is playing and which is often called the 'brain' of a computer?",
    "options": [
      "CPU",
      "Mouse",
      "Monitor",
      "Keyboard"
    ],
    "a": "CPU",
    "explanation": "The CPU executes instructions."
  },
  {
    "id": "CV-0431",
    "category": "TECH",
    "q": "In CarbonVScode, wi-Fi mainly provides:",
    "options": [
      "Wireless network connectivity",
      "Extra battery",
      "More storage",
      "Brighter screen"
    ],
    "a": "Wireless network connectivity",
    "explanation": "Wi-Fi connects devices wirelessly."
  },
  {
    "id": "CV-0432",
    "category": "TECH",
    "q": "Five minutes before the demo, which device displays images?",
    "options": [
      "Monitor",
      "Keyboard",
      "Router",
      "Microphone"
    ],
    "a": "Monitor",
    "explanation": "The monitor displays visual output."
  },
  {
    "id": "CV-0433",
    "category": "TECH",
    "q": "During a 30-second round, which device is mainly used for typing?",
    "options": [
      "Keyboard",
      "Speaker",
      "Router",
      "Webcam"
    ],
    "a": "Keyboard",
    "explanation": "Keyboard input is used for typing."
  },
  {
    "id": "CV-0434",
    "category": "TECH",
    "q": "In a college tech challenge, a QR code usually contains:",
    "options": [
      "Encoded information",
      "Electricity",
      "Battery power",
      "Sound waves"
    ],
    "a": "Encoded information",
    "explanation": "A scanner reads the encoded information."
  },
  {
    "id": "CV-0435",
    "category": "TECH",
    "q": "Your team is playing and which is a web browser?",
    "options": [
      "Chrome",
      "Python",
      "Windows",
      "Bluetooth"
    ],
    "a": "Chrome",
    "explanation": "Chrome is a browser."
  },
  {
    "id": "CV-0436",
    "category": "TECH",
    "q": "In CarbonVScode, which is an operating system?",
    "options": [
      "Windows",
      "Google",
      "Wi-Fi",
      "USB"
    ],
    "a": "Windows",
    "explanation": "Windows is an operating system."
  },
  {
    "id": "CV-0437",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a clue says 'I have keys but no locks.' What am I?",
    "options": [
      "Keyboard",
      "Door",
      "Suitcase",
      "Map"
    ],
    "a": "Keyboard",
    "explanation": "A keyboard has keys, not locks."
  },
  {
    "id": "CV-0438",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a clue says 'I get wetter as I dry.' What am I?",
    "options": [
      "Towel",
      "Cloud",
      "Sponge",
      "Umbrella"
    ],
    "a": "Towel",
    "explanation": "A towel gets wet while drying something."
  },
  {
    "id": "CV-0439",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a clue says 'I have a face and two hands but no arms.' What am I?",
    "options": [
      "Clock",
      "Robot",
      "Mirror",
      "Phone"
    ],
    "a": "Clock",
    "explanation": "A clock has a face and hands."
  },
  {
    "id": "CV-0440",
    "category": "DETECTIVE",
    "q": "Your team is playing and a note says 3-15-4-5. Using A=1, B=2, it spells:",
    "options": [
      "CODE",
      "COLD",
      "DECO",
      "BODE"
    ],
    "a": "CODE",
    "explanation": "3=C, 15=O, 4=D, 5=E."
  },
  {
    "id": "CV-0441",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a suspect says they were in the library. A timestamped photo places them elsewhere. This is:",
    "options": [
      "A contradiction to investigate",
      "Automatic proof of guilt",
      "A Wi-Fi issue",
      "A password"
    ],
    "a": "A contradiction to investigate",
    "explanation": "Conflicting evidence deserves investigation."
  },
  {
    "id": "CV-0442",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a clue says 'first letters matter.' What should you inspect?",
    "options": [
      "First letters of relevant words",
      "Last page only",
      "Battery",
      "Wallpaper"
    ],
    "a": "First letters of relevant words",
    "explanation": "The clue tells you where to look."
  },
  {
    "id": "CV-0443",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a mystery message says 'READ BETWEEN THE LINES.' You should inspect:",
    "options": [
      "Hidden text/spacing",
      "Battery health",
      "Phone case",
      "Wi-Fi speed"
    ],
    "a": "Hidden text/spacing",
    "explanation": "The wording suggests hidden information."
  },
  {
    "id": "CV-0444",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a file named FINAL was modified after submission. What is useful to inspect?",
    "options": [
      "File history/metadata",
      "Keyboard",
      "Wallpaper",
      "Speaker"
    ],
    "a": "File history/metadata",
    "explanation": "Metadata can provide timing clues."
  },
  {
    "id": "CV-0445",
    "category": "DETECTIVE",
    "q": "Your team is playing and two explanations fit the clues. What should a detective do?",
    "options": [
      "Find a clue that separates them",
      "Guess",
      "Stop",
      "Choose the funniest"
    ],
    "a": "Find a clue that separates them",
    "explanation": "Good investigation seeks distinguishing evidence."
  },
  {
    "id": "CV-0446",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a detective finds a suspicious USB. First step?",
    "options": [
      "Inspect it without altering evidence",
      "Format it",
      "Throw it away",
      "Guess"
    ],
    "a": "Inspect it without altering evidence",
    "explanation": "Preserve evidence while checking it."
  },
  {
    "id": "CV-0447",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, professor says 'This will be easy.' Your safest move?",
    "options": [
      "Open your notebook",
      "Celebrate",
      "Leave",
      "Sleep"
    ],
    "a": "Open your notebook",
    "explanation": "Never underestimate that sentence."
  },
  {
    "id": "CV-0448",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, which item mysteriously disappears in hostels?",
    "options": [
      "Charger",
      "Ceiling",
      "Bed",
      "Building"
    ],
    "a": "Charger",
    "explanation": "Chargers travel mysteriously."
  },
  {
    "id": "CV-0449",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, your roommate says '5 minutes' after an alarm. Usually:",
    "options": [
      "The timeline is optimistic",
      "Exactly 5 minutes",
      "They are outside",
      "Semester ended"
    ],
    "a": "The timeline is optimistic",
    "explanation": "'Five minutes' is flexible."
  },
  {
    "id": "CV-0450",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and your team has 30 seconds left. Worst strategy?",
    "options": [
      "Argue about the font",
      "Answer",
      "Read the question",
      "Split tasks"
    ],
    "a": "Argue about the font",
    "explanation": "Priorities!"
  },
  {
    "id": "CV-0451",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, someone asks, 'Who has the PPT?' Five minutes before presenting. Your first goal?",
    "options": [
      "Find the actual file",
      "Change wallpaper",
      "Open Bluetooth",
      "Rename laptop"
    ],
    "a": "Find the actual file",
    "explanation": "Locate the presentation quickly."
  },
  {
    "id": "CV-0452",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, you have an 8 AM class after sleeping at 3 AM. Best long-term fix?",
    "options": [
      "Sleep earlier when possible",
      "Set 20 alarms and ignore them",
      "Drink only cola",
      "Blame the moon"
    ],
    "a": "Sleep earlier when possible",
    "explanation": "Sleep helps mornings."
  },
  {
    "id": "CV-0453",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, your teammate says 'I was mentally contributing.' Best response?",
    "options": [
      "Ask for their actual task/result",
      "Give them all points",
      "Delete project",
      "Turn off lights"
    ],
    "a": "Ask for their actual task/result",
    "explanation": "Teams need actual contributions."
  },
  {
    "id": "CV-0454",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, the canteen queue is huge. A simple strategy is:",
    "options": [
      "Choose a less crowded option/time",
      "Debug the queue",
      "Turn on Bluetooth",
      "Refresh browser"
    ],
    "a": "Choose a less crowded option/time",
    "explanation": "Simple queue management."
  },
  {
    "id": "CV-0455",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and your assignment is due in 10 minutes and the file is missing. First:",
    "options": [
      "Search for the filename",
      "Change ringtone",
      "Restart the monitor",
      "Open Instagram"
    ],
    "a": "Search for the filename",
    "explanation": "Search before panicking."
  },
  {
    "id": "CV-0456",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, someone says 'Bro trust me, I watched one tutorial.' Your reaction?",
    "options": [
      "Check the result",
      "Give them admin access",
      "Delete everything",
      "Close the laptop"
    ],
    "a": "Check the result",
    "explanation": "Tutorial knowledge still needs testing."
  },
  {
    "id": "CV-0457",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, which would be the worst password?",
    "options": [
      "password123",
      "A unique passphrase",
      "A random generated password",
      "A long unique password"
    ],
    "a": "password123",
    "explanation": "It is predictable."
  },
  {
    "id": "CV-0458",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, your calculator says 2+2=5. First assumption?",
    "options": [
      "Something is wrong",
      "Math changed",
      "Semester ended",
      "Calculator became philosophical"
    ],
    "a": "Something is wrong",
    "explanation": "Check the input/calculator."
  },
  {
    "id": "CV-0459",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, which is most likely to have a mute button?",
    "options": [
      "Remote control",
      "Notebook",
      "Water bottle",
      "Backpack"
    ],
    "a": "Remote control",
    "explanation": "Remotes commonly control audio."
  },
  {
    "id": "CV-0460",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and your laptop fan sounds like a helicopter. You should probably:",
    "options": [
      "Check what is running/heat",
      "Open more tabs",
      "Put it under a pillow",
      "Ignore it"
    ],
    "a": "Check what is running/heat",
    "explanation": "High workload or heat can make fans loud."
  },
  {
    "id": "CV-0461",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, which sounds like a fake tech startup?",
    "options": [
      "Quantum Banana",
      "Microsoft",
      "Mozilla",
      "Google"
    ],
    "a": "Quantum Banana",
    "explanation": "It sounds invented."
  },
  {
    "id": "CV-0462",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, your phone falls face-down. First thing you check?",
    "options": [
      "The screen",
      "Weather",
      "Wi-Fi password",
      "Attendance"
    ],
    "a": "The screen",
    "explanation": "Immediate survival check."
  },
  {
    "id": "CV-0463",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, which is most likely an image file?",
    "options": [
      ".jpg",
      ".mp4",
      ".txt",
      ".csv"
    ],
    "a": ".jpg",
    "explanation": "JPG is an image format."
  },
  {
    "id": "CV-0464",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, which is most likely a video file?",
    "options": [
      ".mp4",
      ".txt",
      ".jpg",
      ".csv"
    ],
    "a": ".mp4",
    "explanation": "MP4 is a common video format."
  },
  {
    "id": "CV-0465",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and which sounds most like internet slang?",
    "options": [
      "LOL",
      "RAM",
      "CPU",
      "HTTP"
    ],
    "a": "LOL",
    "explanation": "LOL is common online slang."
  },
  {
    "id": "CV-0466",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, a mysterious software error appears. Most useful first move?",
    "options": [
      "Search the exact error",
      "Increase brightness",
      "Rename laptop",
      "Change ringtone"
    ],
    "a": "Search the exact error",
    "explanation": "The error text often gives useful clues."
  },
  {
    "id": "CV-0467",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which key usually starts a new line?",
    "options": [
      "Enter",
      "Shift",
      "Ctrl",
      "Esc"
    ],
    "a": "Enter",
    "explanation": "Enter starts a new line."
  },
  {
    "id": "CV-0468",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which symbol is common in email addresses?",
    "options": [
      "@",
      "#",
      "$",
      "%"
    ],
    "a": "@",
    "explanation": "It separates the username and domain."
  },
  {
    "id": "CV-0469",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which is a search engine?",
    "options": [
      "Google",
      "Bluetooth",
      "Windows",
      "USB"
    ],
    "a": "Google",
    "explanation": "Google is a search engine."
  },
  {
    "id": "CV-0470",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which is a social media platform?",
    "options": [
      "Instagram",
      "HDMI",
      "SSD",
      "RAM"
    ],
    "a": "Instagram",
    "explanation": "Instagram is a social platform."
  },
  {
    "id": "CV-0471",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which is commonly used to listen to audio?",
    "options": [
      "Headphones",
      "Router",
      "Mouse pad",
      "Webcam"
    ],
    "a": "Headphones",
    "explanation": "They output audio."
  },
  {
    "id": "CV-0472",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which key often cancels/escapes an action?",
    "options": [
      "Esc",
      "Tab",
      "Caps Lock",
      "Space"
    ],
    "a": "Esc",
    "explanation": "Esc commonly means escape/cancel."
  },
  {
    "id": "CV-0473",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which key can make letters uppercase while held?",
    "options": [
      "Shift",
      "Alt",
      "Tab",
      "Enter"
    ],
    "a": "Shift",
    "explanation": "Shift modifies letter case."
  },
  {
    "id": "CV-0474",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, what does 'app' usually mean?",
    "options": [
      "Application",
      "Apple password",
      "Audio printer program",
      "Automatic pixel"
    ],
    "a": "Application",
    "explanation": "App is short for application."
  },
  {
    "id": "CV-0475",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which is larger?",
    "options": [
      "1 GB",
      "1 MB",
      "1 KB",
      "1 byte"
    ],
    "a": "1 GB",
    "explanation": "GB is larger than MB and KB."
  },
  {
    "id": "CV-0476",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which is a plain-text file extension?",
    "options": [
      ".txt",
      ".mp4",
      ".png",
      ".mp3"
    ],
    "a": ".txt",
    "explanation": "TXT commonly stores plain text."
  },
  {
    "id": "CV-0477",
    "category": "TECH",
    "q": "Five minutes before the demo, what is Ctrl + Z mainly used for?",
    "options": [
      "undo your last action",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "undo your last action",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0478",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what Ctrl + Z does. Which answer saves the round?",
    "options": [
      "undo your last action",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "undo your last action",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0479",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "Ctrl + Z → undo your last action",
      "Ctrl + Z → cooking food",
      "Ctrl + Z → measuring height",
      "Ctrl + Z → changing wallpaper"
    ],
    "a": "Ctrl + Z → undo your last action",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0480",
    "category": "TECH",
    "q": "Your team is playing and what is Ctrl + S mainly used for?",
    "options": [
      "save your work",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "save your work",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0481",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what Ctrl + S does. Which answer saves the round?",
    "options": [
      "save your work",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "save your work",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0482",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "Ctrl + S → save your work",
      "Ctrl + S → cooking food",
      "Ctrl + S → measuring height",
      "Ctrl + S → changing wallpaper"
    ],
    "a": "Ctrl + S → save your work",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0483",
    "category": "TECH",
    "q": "During a 30-second round, what is Ctrl + F mainly used for?",
    "options": [
      "find text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "find text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0484",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what Ctrl + F does. Which answer saves the round?",
    "options": [
      "find text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "find text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0485",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "Ctrl + F → find text",
      "Ctrl + F → cooking food",
      "Ctrl + F → measuring height",
      "Ctrl + F → changing wallpaper"
    ],
    "a": "Ctrl + F → find text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0486",
    "category": "TECH",
    "q": "In CarbonVScode, what is QR code mainly used for?",
    "options": [
      "encode information",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "encode information",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0487",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what QR code does. Which answer saves the round?",
    "options": [
      "encode information",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "encode information",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0488",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "QR code → encode information",
      "QR code → cooking food",
      "QR code → measuring height",
      "QR code → changing wallpaper"
    ],
    "a": "QR code → encode information",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0489",
    "category": "TECH",
    "q": "In a college tech challenge, what is browser mainly used for?",
    "options": [
      "open websites",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "open websites",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0490",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what browser does. Which answer saves the round?",
    "options": [
      "open websites",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "open websites",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0491",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "browser → open websites",
      "browser → cooking food",
      "browser → measuring height",
      "browser → changing wallpaper"
    ],
    "a": "browser → open websites",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0492",
    "category": "TECH",
    "q": "Five minutes before the demo, what is router mainly used for?",
    "options": [
      "direct network traffic",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "direct network traffic",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0493",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what router does. Which answer saves the round?",
    "options": [
      "direct network traffic",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "direct network traffic",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0494",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "router → direct network traffic",
      "router → cooking food",
      "router → measuring height",
      "router → changing wallpaper"
    ],
    "a": "router → direct network traffic",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0495",
    "category": "TECH",
    "q": "Your team is playing and what is CPU mainly used for?",
    "options": [
      "execute instructions",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "execute instructions",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0496",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what CPU does. Which answer saves the round?",
    "options": [
      "execute instructions",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "execute instructions",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0497",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "CPU → execute instructions",
      "CPU → cooking food",
      "CPU → measuring height",
      "CPU → changing wallpaper"
    ],
    "a": "CPU → execute instructions",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0498",
    "category": "TECH",
    "q": "During a 30-second round, what is RAM mainly used for?",
    "options": [
      "hold temporary working data",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "hold temporary working data",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0499",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your teammate asks what RAM does. Which answer saves the round?",
    "options": [
      "hold temporary working data",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "hold temporary working data",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0500",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which match is correct?",
    "options": [
      "RAM → hold temporary working data",
      "RAM → cooking food",
      "RAM → measuring height",
      "RAM → changing wallpaper"
    ],
    "a": "RAM → hold temporary working data",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0501",
    "category": "TECH",
    "q": "In CarbonVScode, what is SSD mainly used for?",
    "options": [
      "store files",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "store files",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0502",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate asks what SSD does. Which answer saves the round?",
    "options": [
      "store files",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "store files",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0503",
    "category": "QUICKFIRE",
    "q": "During a 30-second round, which match is correct?",
    "options": [
      "SSD → store files",
      "SSD → cooking food",
      "SSD → measuring height",
      "SSD → changing wallpaper"
    ],
    "a": "SSD → store files",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0504",
    "category": "TECH",
    "q": "In a college tech challenge, what is keyboard mainly used for?",
    "options": [
      "type text",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "type text",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0505",
    "category": "FUN TECH",
    "q": "Your team is playing and your teammate asks what keyboard does. Which answer saves the round?",
    "options": [
      "type text",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "type text",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0506",
    "category": "QUICKFIRE",
    "q": "In CarbonVScode, which match is correct?",
    "options": [
      "keyboard → type text",
      "keyboard → cooking food",
      "keyboard → measuring height",
      "keyboard → changing wallpaper"
    ],
    "a": "keyboard → type text",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0507",
    "category": "TECH",
    "q": "Five minutes before the demo, what is mouse mainly used for?",
    "options": [
      "control the pointer",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "control the pointer",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0508",
    "category": "FUN TECH",
    "q": "During a 30-second round, your teammate asks what mouse does. Which answer saves the round?",
    "options": [
      "control the pointer",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "control the pointer",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0509",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which match is correct?",
    "options": [
      "mouse → control the pointer",
      "mouse → cooking food",
      "mouse → measuring height",
      "mouse → changing wallpaper"
    ],
    "a": "mouse → control the pointer",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0510",
    "category": "TECH",
    "q": "Your team is playing and what is monitor mainly used for?",
    "options": [
      "display visuals",
      "Making tea",
      "Changing room temperature",
      "Charging shoes"
    ],
    "a": "display visuals",
    "explanation": "That's the usual purpose."
  },
  {
    "id": "CV-0511",
    "category": "FUN TECH",
    "q": "In CarbonVScode, your teammate asks what monitor does. Which answer saves the round?",
    "options": [
      "display visuals",
      "It controls gravity",
      "It makes exams disappear",
      "It orders pizza"
    ],
    "a": "display visuals",
    "explanation": "Correct—and sadly it cannot make exams disappear."
  },
  {
    "id": "CV-0512",
    "category": "QUICKFIRE",
    "q": "Five minutes before the demo, which match is correct?",
    "options": [
      "monitor → display visuals",
      "monitor → cooking food",
      "monitor → measuring height",
      "monitor → changing wallpaper"
    ],
    "a": "monitor → display visuals",
    "explanation": "That's the correct pairing."
  },
  {
    "id": "CV-0513",
    "category": "LOGIC",
    "q": "During a 30-second round, which number comes next: 3, 6, 12, 24, __?",
    "options": [
      "36",
      "48",
      "30",
      "42"
    ],
    "a": "48",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0514",
    "category": "LOGIC",
    "q": "In a college tech challenge, which number comes next: 5, 10, 15, 20, __?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0515",
    "category": "LOGIC",
    "q": "Your team is playing and which number comes next: 1, 4, 9, 16, __?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "a": "25",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0516",
    "category": "LOGIC",
    "q": "In CarbonVScode, if 4 friends split 20 chocolates equally, each gets:",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "a": "5",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0517",
    "category": "LOGIC",
    "q": "Five minutes before the demo, if a challenge gives 10 points and you answer twice correctly, you earn:",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "a": "20",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0518",
    "category": "LOGIC",
    "q": "During a 30-second round, if a timer starts at 60 seconds and 15 seconds pass, it shows:",
    "options": [
      "45",
      "50",
      "55",
      "75"
    ],
    "a": "45",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0519",
    "category": "LOGIC",
    "q": "In a college tech challenge, which is the odd one out?",
    "options": [
      "Circle",
      "Triangle",
      "Square",
      "Keyboard"
    ],
    "a": "Keyboard",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0520",
    "category": "LOGIC",
    "q": "Your team is playing and which is the odd one out?",
    "options": [
      "Chrome",
      "Firefox",
      "Edge",
      "Excel"
    ],
    "a": "Excel",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0521",
    "category": "LOGIC",
    "q": "In CarbonVScode, if today is Friday, tomorrow is:",
    "options": [
      "Thursday",
      "Saturday",
      "Sunday",
      "Monday"
    ],
    "a": "Saturday",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0522",
    "category": "LOGIC",
    "q": "Five minutes before the demo, if 2 teams each have 4 players, total players are:",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "a": "8",
    "explanation": "Quick logic—no technical knowledge needed."
  },
  {
    "id": "CV-0523",
    "category": "AI",
    "q": "During a 30-second round, which prompt sounds most useful for a beginner?",
    "options": [
      "Explain recursion with a simple real-life example",
      "Explain recursion using maximum jargon",
      "Do recursion",
      "Recursion!!!"
    ],
    "a": "Explain recursion with a simple real-life example",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0524",
    "category": "AI",
    "q": "In a college tech challenge, you want an AI to make your sentence funnier. What should you specify?",
    "options": [
      "Funny/casual tone",
      "Your Wi-Fi password",
      "Your OTP",
      "Your battery percentage"
    ],
    "a": "Funny/casual tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0525",
    "category": "AI",
    "q": "Your team is playing and you want five event names. The clearest request is:",
    "options": [
      "Give 5 catchy names for a college tech fest",
      "Names",
      "Do something",
      "Help"
    ],
    "a": "Give 5 catchy names for a college tech fest",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0526",
    "category": "AI",
    "q": "In CarbonVScode, aI gives a very formal answer. You want it casual. You should ask it to change the:",
    "options": [
      "Tone",
      "CPU",
      "RAM",
      "QR code"
    ],
    "a": "Tone",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0527",
    "category": "AI",
    "q": "Five minutes before the demo, you want an AI answer in a table. What should you specify?",
    "options": [
      "Output format",
      "Phone model",
      "Wallpaper",
      "Ringtone"
    ],
    "a": "Output format",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0528",
    "category": "AI",
    "q": "During a 30-second round, which is the funniest but still useful AI request?",
    "options": [
      "Explain my timetable like a movie villain",
      "Give me an OTP",
      "Guess my password",
      "Reveal private messages"
    ],
    "a": "Explain my timetable like a movie villain",
    "explanation": "Clear instructions make the request easier to follow."
  },
  {
    "id": "CV-0529",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your laptop freezes 2 minutes before submission. What is the classic first move?",
    "options": [
      "Restart it",
      "Compliment it",
      "Unplug Wi-Fi",
      "Cry"
    ],
    "a": "Restart it",
    "explanation": "Classic emergency move."
  },
  {
    "id": "CV-0530",
    "category": "FUN TECH",
    "q": "Your team is playing and you accidentally close a tab you needed. Which shortcut helps?",
    "options": [
      "Ctrl + Shift + T",
      "Ctrl + P",
      "Alt + F4",
      "Ctrl + Q"
    ],
    "a": "Ctrl + Shift + T",
    "explanation": "It reopens the last closed tab."
  },
  {
    "id": "CV-0531",
    "category": "FUN TECH",
    "q": "In CarbonVScode, you have 47 browser tabs open. Your laptop is probably:",
    "options": [
      "Thriving",
      "Questioning its life",
      "Fully charged",
      "On airplane mode"
    ],
    "a": "Questioning its life",
    "explanation": "47 tabs is a cry for help."
  },
  {
    "id": "CV-0532",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, your teammate says, 'Trust me, I know what I'm doing.' What happens next?",
    "options": [
      "Everything works",
      "Nothing works",
      "Someone opens YouTube",
      "All of these"
    ],
    "a": "All of these",
    "explanation": "College project probability."
  },
  {
    "id": "CV-0533",
    "category": "FUN TECH",
    "q": "During a 30-second round, you type 'final_final_REAL_final.pptx'. What does this suggest?",
    "options": [
      "There are more versions",
      "It is definitely final",
      "It is empty",
      "It is a video"
    ],
    "a": "There are more versions",
    "explanation": "We all know this naming system."
  },
  {
    "id": "CV-0534",
    "category": "FUN TECH",
    "q": "In a college tech challenge, your phone is at 1% and the charger is across the room. Biggest enemy?",
    "options": [
      "Physics",
      "Distance",
      "Your laziness",
      "The charger"
    ],
    "a": "Your laziness",
    "explanation": "The hostel final boss."
  },
  {
    "id": "CV-0535",
    "category": "FUN TECH",
    "q": "Your team is playing and a QR code is not scanning. What should you try first?",
    "options": [
      "Move/adjust the camera",
      "Throw the phone",
      "Delete the browser",
      "Change team name"
    ],
    "a": "Move/adjust the camera",
    "explanation": "Distance and focus matter."
  },
  {
    "id": "CV-0536",
    "category": "FUN TECH",
    "q": "In CarbonVScode, which message causes instant group-chat panic?",
    "options": [
      "Guys, important announcement",
      "Okay",
      "Thanks",
      "Good morning"
    ],
    "a": "Guys, important announcement",
    "explanation": "Everyone suddenly becomes active."
  },
  {
    "id": "CV-0537",
    "category": "FUN TECH",
    "q": "Five minutes before the demo, you submit an assignment and immediately notice a typo. Your reaction?",
    "options": [
      "Regret",
      "Victory",
      "Sleep",
      "Bluetooth"
    ],
    "a": "Regret",
    "explanation": "The typo always appears after Submit."
  },
  {
    "id": "CV-0538",
    "category": "FUN TECH",
    "q": "During a 30-second round, the projector says 'No Signal.' What should you check first?",
    "options": [
      "Cable/input source",
      "Attendance",
      "Weather",
      "Class timetable"
    ],
    "a": "Cable/input source",
    "explanation": "The display connection/source is the obvious first check."
  },
  {
    "id": "CV-0539",
    "category": "LOGIC",
    "q": "In a college tech challenge, a bat and ball cost ₹110 together. The bat costs ₹100 more. The ball costs:",
    "options": [
      "₹5",
      "₹10",
      "₹15",
      "₹20"
    ],
    "a": "₹5",
    "explanation": "₹5 + ₹105 = ₹110."
  },
  {
    "id": "CV-0540",
    "category": "LOGIC",
    "q": "Your team is playing and you overtake the person in second place. You are now:",
    "options": [
      "First",
      "Second",
      "Third",
      "Last"
    ],
    "a": "Second",
    "explanation": "You take their position."
  },
  {
    "id": "CV-0541",
    "category": "LOGIC",
    "q": "In CarbonVScode, a farmer has 10 sheep. All but 3 run away. How many remain?",
    "options": [
      "3",
      "7",
      "10",
      "0"
    ],
    "a": "3",
    "explanation": "All but 3 means 3 remain."
  },
  {
    "id": "CV-0542",
    "category": "LOGIC",
    "q": "Five minutes before the demo, which comes next: 2, 4, 8, 16, __?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "a": "32",
    "explanation": "The numbers double."
  },
  {
    "id": "CV-0543",
    "category": "LOGIC",
    "q": "During a 30-second round, which is heavier: 1 kg iron or 1 kg cotton?",
    "options": [
      "Iron",
      "Cotton",
      "Same",
      "Depends on weather"
    ],
    "a": "Same",
    "explanation": "A kilogram is a kilogram."
  },
  {
    "id": "CV-0544",
    "category": "LOGIC",
    "q": "In a college tech challenge, you have one match and enter a dark room with a candle, lamp and stove. What do you light first?",
    "options": [
      "Candle",
      "Lamp",
      "Stove",
      "Match"
    ],
    "a": "Match",
    "explanation": "You need the match lit first."
  },
  {
    "id": "CV-0545",
    "category": "LOGIC",
    "q": "Your team is playing and if yesterday was Monday, tomorrow is:",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    "a": "Wednesday",
    "explanation": "Today is Tuesday."
  },
  {
    "id": "CV-0546",
    "category": "LOGIC",
    "q": "In CarbonVScode, a clock shows 3:00. The angle between its hands is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "a": "90°",
    "explanation": "The hands are perpendicular."
  },
  {
    "id": "CV-0547",
    "category": "LOGIC",
    "q": "Five minutes before the demo, a father and son are in an accident. The father dies. The surgeon says, 'He's my son.' The surgeon is:",
    "options": [
      "His mother",
      "His uncle",
      "His sister",
      "His teacher"
    ],
    "a": "His mother",
    "explanation": "The riddle challenges an assumption."
  },
  {
    "id": "CV-0548",
    "category": "LOGIC",
    "q": "During a 30-second round, which does NOT belong: Apple, Mango, Banana, Carrot?",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "a": "Carrot",
    "explanation": "Carrot is generally classified as a vegetable."
  },
  {
    "id": "CV-0549",
    "category": "AI",
    "q": "In a college tech challenge, you ask AI to make a 2-page answer and it gives 12 pages. What do you say?",
    "options": [
      "Make it shorter",
      "Print everything",
      "Delete the AI",
      "Ask for 50 more pages"
    ],
    "a": "Make it shorter",
    "explanation": "You can refine the prompt."
  },
  {
    "id": "CV-0550",
    "category": "AI",
    "q": "Your team is playing and which prompt is more specific?",
    "options": [
      "Make something cool",
      "Make a blue poster for a college coding event with a QR area",
      "Do it",
      "Poster pls"
    ],
    "a": "Make a blue poster for a college coding event with a QR area",
    "explanation": "Specific instructions help."
  },
  {
    "id": "CV-0551",
    "category": "AI",
    "q": "In CarbonVScode, aI confidently gives a false fact. This can be called:",
    "options": [
      "Hallucination",
      "Charging",
      "Caching",
      "Streaming"
    ],
    "a": "Hallucination",
    "explanation": "AI can generate unsupported information."
  },
  {
    "id": "CV-0552",
    "category": "AI",
    "q": "Five minutes before the demo, you want AI to explain a topic to a beginner. You should ask for:",
    "options": [
      "A simple explanation",
      "More jargon",
      "A password",
      "A spreadsheet"
    ],
    "a": "A simple explanation",
    "explanation": "Tell it the audience and difficulty."
  },
  {
    "id": "CV-0553",
    "category": "AI",
    "q": "During a 30-second round, which is a good use of AI for a fresher?",
    "options": [
      "Brainstorming ideas",
      "Sharing OTPs",
      "Sharing passwords",
      "Revealing private data"
    ],
    "a": "Brainstorming ideas",
    "explanation": "AI can help with creative work."
  },
  {
    "id": "CV-0554",
    "category": "AI",
    "q": "In a college tech challenge, you want exactly 3 caption ideas. Why say '3'?",
    "options": [
      "It sets an output limit",
      "It improves battery",
      "It changes keyboard",
      "It boosts Wi-Fi"
    ],
    "a": "It sets an output limit",
    "explanation": "Clear constraints help."
  },
  {
    "id": "CV-0555",
    "category": "AI",
    "q": "Your team is playing and aI writes code you do not understand. Before using it, you should:",
    "options": [
      "Read/test/understand it",
      "Run blindly",
      "Send it everywhere",
      "Delete your editor"
    ],
    "a": "Read/test/understand it",
    "explanation": "Generated code still needs checking."
  },
  {
    "id": "CV-0556",
    "category": "AI",
    "q": "In CarbonVScode, aI says 'I am 100% certain.' You should:",
    "options": [
      "Verify important facts",
      "Believe it automatically",
      "Screenshot it",
      "Ask for an OTP"
    ],
    "a": "Verify important facts",
    "explanation": "Confidence is not proof."
  },
  {
    "id": "CV-0557",
    "category": "AI",
    "q": "Five minutes before the demo, which is a creative AI task?",
    "options": [
      "Generate a fictional superhero name",
      "Guess an OTP",
      "Reveal a password",
      "Find private messages"
    ],
    "a": "Generate a fictional superhero name",
    "explanation": "Creative generation is a normal use."
  },
  {
    "id": "CV-0558",
    "category": "AI",
    "q": "During a 30-second round, you want a formal email rewritten casually. What should you specify?",
    "options": [
      "Tone",
      "Battery",
      "Wi-Fi password",
      "Screen size"
    ],
    "a": "Tone",
    "explanation": "Tone controls how the writing sounds."
  },
  {
    "id": "CV-0559",
    "category": "TECH",
    "q": "In a college tech challenge, what does Ctrl + C usually do?",
    "options": [
      "Copy",
      "Cut",
      "Close",
      "Compile"
    ],
    "a": "Copy",
    "explanation": "It copies selected content."
  },
  {
    "id": "CV-0560",
    "category": "TECH",
    "q": "Your team is playing and what does Ctrl + V usually do?",
    "options": [
      "Paste",
      "Print",
      "Undo",
      "Zoom"
    ],
    "a": "Paste",
    "explanation": "It pastes copied/cut content."
  },
  {
    "id": "CV-0561",
    "category": "TECH",
    "q": "In CarbonVScode, which is commonly used for permanent file storage?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "GPU"
    ],
    "a": "SSD",
    "explanation": "SSD stores data when power is off."
  },
  {
    "id": "CV-0562",
    "category": "TECH",
    "q": "Five minutes before the demo, which is often called the 'brain' of a computer?",
    "options": [
      "CPU",
      "Mouse",
      "Monitor",
      "Keyboard"
    ],
    "a": "CPU",
    "explanation": "The CPU executes instructions."
  },
  {
    "id": "CV-0563",
    "category": "TECH",
    "q": "During a 30-second round, wi-Fi mainly provides:",
    "options": [
      "Wireless network connectivity",
      "Extra battery",
      "More storage",
      "Brighter screen"
    ],
    "a": "Wireless network connectivity",
    "explanation": "Wi-Fi connects devices wirelessly."
  },
  {
    "id": "CV-0564",
    "category": "TECH",
    "q": "In a college tech challenge, which device displays images?",
    "options": [
      "Monitor",
      "Keyboard",
      "Router",
      "Microphone"
    ],
    "a": "Monitor",
    "explanation": "The monitor displays visual output."
  },
  {
    "id": "CV-0565",
    "category": "TECH",
    "q": "Your team is playing and which device is mainly used for typing?",
    "options": [
      "Keyboard",
      "Speaker",
      "Router",
      "Webcam"
    ],
    "a": "Keyboard",
    "explanation": "Keyboard input is used for typing."
  },
  {
    "id": "CV-0566",
    "category": "TECH",
    "q": "In CarbonVScode, a QR code usually contains:",
    "options": [
      "Encoded information",
      "Electricity",
      "Battery power",
      "Sound waves"
    ],
    "a": "Encoded information",
    "explanation": "A scanner reads the encoded information."
  },
  {
    "id": "CV-0567",
    "category": "TECH",
    "q": "Five minutes before the demo, which is a web browser?",
    "options": [
      "Chrome",
      "Python",
      "Windows",
      "Bluetooth"
    ],
    "a": "Chrome",
    "explanation": "Chrome is a browser."
  },
  {
    "id": "CV-0568",
    "category": "TECH",
    "q": "During a 30-second round, which is an operating system?",
    "options": [
      "Windows",
      "Google",
      "Wi-Fi",
      "USB"
    ],
    "a": "Windows",
    "explanation": "Windows is an operating system."
  },
  {
    "id": "CV-0569",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a clue says 'I have keys but no locks.' What am I?",
    "options": [
      "Keyboard",
      "Door",
      "Suitcase",
      "Map"
    ],
    "a": "Keyboard",
    "explanation": "A keyboard has keys, not locks."
  },
  {
    "id": "CV-0570",
    "category": "DETECTIVE",
    "q": "Your team is playing and a clue says 'I get wetter as I dry.' What am I?",
    "options": [
      "Towel",
      "Cloud",
      "Sponge",
      "Umbrella"
    ],
    "a": "Towel",
    "explanation": "A towel gets wet while drying something."
  },
  {
    "id": "CV-0571",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a clue says 'I have a face and two hands but no arms.' What am I?",
    "options": [
      "Clock",
      "Robot",
      "Mirror",
      "Phone"
    ],
    "a": "Clock",
    "explanation": "A clock has a face and hands."
  },
  {
    "id": "CV-0572",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, a note says 3-15-4-5. Using A=1, B=2, it spells:",
    "options": [
      "CODE",
      "COLD",
      "DECO",
      "BODE"
    ],
    "a": "CODE",
    "explanation": "3=C, 15=O, 4=D, 5=E."
  },
  {
    "id": "CV-0573",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a suspect says they were in the library. A timestamped photo places them elsewhere. This is:",
    "options": [
      "A contradiction to investigate",
      "Automatic proof of guilt",
      "A Wi-Fi issue",
      "A password"
    ],
    "a": "A contradiction to investigate",
    "explanation": "Conflicting evidence deserves investigation."
  },
  {
    "id": "CV-0574",
    "category": "DETECTIVE",
    "q": "In a college tech challenge, a clue says 'first letters matter.' What should you inspect?",
    "options": [
      "First letters of relevant words",
      "Last page only",
      "Battery",
      "Wallpaper"
    ],
    "a": "First letters of relevant words",
    "explanation": "The clue tells you where to look."
  },
  {
    "id": "CV-0575",
    "category": "DETECTIVE",
    "q": "Your team is playing and a mystery message says 'READ BETWEEN THE LINES.' You should inspect:",
    "options": [
      "Hidden text/spacing",
      "Battery health",
      "Phone case",
      "Wi-Fi speed"
    ],
    "a": "Hidden text/spacing",
    "explanation": "The wording suggests hidden information."
  },
  {
    "id": "CV-0576",
    "category": "DETECTIVE",
    "q": "In CarbonVScode, a file named FINAL was modified after submission. What is useful to inspect?",
    "options": [
      "File history/metadata",
      "Keyboard",
      "Wallpaper",
      "Speaker"
    ],
    "a": "File history/metadata",
    "explanation": "Metadata can provide timing clues."
  },
  {
    "id": "CV-0577",
    "category": "DETECTIVE",
    "q": "Five minutes before the demo, two explanations fit the clues. What should a detective do?",
    "options": [
      "Find a clue that separates them",
      "Guess",
      "Stop",
      "Choose the funniest"
    ],
    "a": "Find a clue that separates them",
    "explanation": "Good investigation seeks distinguishing evidence."
  },
  {
    "id": "CV-0578",
    "category": "DETECTIVE",
    "q": "During a 30-second round, a detective finds a suspicious USB. First step?",
    "options": [
      "Inspect it without altering evidence",
      "Format it",
      "Throw it away",
      "Guess"
    ],
    "a": "Inspect it without altering evidence",
    "explanation": "Preserve evidence while checking it."
  },
  {
    "id": "CV-0579",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, professor says 'This will be easy.' Your safest move?",
    "options": [
      "Open your notebook",
      "Celebrate",
      "Leave",
      "Sleep"
    ],
    "a": "Open your notebook",
    "explanation": "Never underestimate that sentence."
  },
  {
    "id": "CV-0580",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and which item mysteriously disappears in hostels?",
    "options": [
      "Charger",
      "Ceiling",
      "Bed",
      "Building"
    ],
    "a": "Charger",
    "explanation": "Chargers travel mysteriously."
  },
  {
    "id": "CV-0581",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, your roommate says '5 minutes' after an alarm. Usually:",
    "options": [
      "The timeline is optimistic",
      "Exactly 5 minutes",
      "They are outside",
      "Semester ended"
    ],
    "a": "The timeline is optimistic",
    "explanation": "'Five minutes' is flexible."
  },
  {
    "id": "CV-0582",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, your team has 30 seconds left. Worst strategy?",
    "options": [
      "Argue about the font",
      "Answer",
      "Read the question",
      "Split tasks"
    ],
    "a": "Argue about the font",
    "explanation": "Priorities!"
  },
  {
    "id": "CV-0583",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, someone asks, 'Who has the PPT?' Five minutes before presenting. Your first goal?",
    "options": [
      "Find the actual file",
      "Change wallpaper",
      "Open Bluetooth",
      "Rename laptop"
    ],
    "a": "Find the actual file",
    "explanation": "Locate the presentation quickly."
  },
  {
    "id": "CV-0584",
    "category": "COLLEGE CHAOS",
    "q": "In a college tech challenge, you have an 8 AM class after sleeping at 3 AM. Best long-term fix?",
    "options": [
      "Sleep earlier when possible",
      "Set 20 alarms and ignore them",
      "Drink only cola",
      "Blame the moon"
    ],
    "a": "Sleep earlier when possible",
    "explanation": "Sleep helps mornings."
  },
  {
    "id": "CV-0585",
    "category": "COLLEGE CHAOS",
    "q": "Your team is playing and your teammate says 'I was mentally contributing.' Best response?",
    "options": [
      "Ask for their actual task/result",
      "Give them all points",
      "Delete project",
      "Turn off lights"
    ],
    "a": "Ask for their actual task/result",
    "explanation": "Teams need actual contributions."
  },
  {
    "id": "CV-0586",
    "category": "COLLEGE CHAOS",
    "q": "In CarbonVScode, the canteen queue is huge. A simple strategy is:",
    "options": [
      "Choose a less crowded option/time",
      "Debug the queue",
      "Turn on Bluetooth",
      "Refresh browser"
    ],
    "a": "Choose a less crowded option/time",
    "explanation": "Simple queue management."
  },
  {
    "id": "CV-0587",
    "category": "COLLEGE CHAOS",
    "q": "Five minutes before the demo, your assignment is due in 10 minutes and the file is missing. First:",
    "options": [
      "Search for the filename",
      "Change ringtone",
      "Restart the monitor",
      "Open Instagram"
    ],
    "a": "Search for the filename",
    "explanation": "Search before panicking."
  },
  {
    "id": "CV-0588",
    "category": "COLLEGE CHAOS",
    "q": "During a 30-second round, someone says 'Bro trust me, I watched one tutorial.' Your reaction?",
    "options": [
      "Check the result",
      "Give them admin access",
      "Delete everything",
      "Close the laptop"
    ],
    "a": "Check the result",
    "explanation": "Tutorial knowledge still needs testing."
  },
  {
    "id": "CV-0589",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, which would be the worst password?",
    "options": [
      "password123",
      "A unique passphrase",
      "A random generated password",
      "A long unique password"
    ],
    "a": "password123",
    "explanation": "It is predictable."
  },
  {
    "id": "CV-0590",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and your calculator says 2+2=5. First assumption?",
    "options": [
      "Something is wrong",
      "Math changed",
      "Semester ended",
      "Calculator became philosophical"
    ],
    "a": "Something is wrong",
    "explanation": "Check the input/calculator."
  },
  {
    "id": "CV-0591",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, which is most likely to have a mute button?",
    "options": [
      "Remote control",
      "Notebook",
      "Water bottle",
      "Backpack"
    ],
    "a": "Remote control",
    "explanation": "Remotes commonly control audio."
  },
  {
    "id": "CV-0592",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, your laptop fan sounds like a helicopter. You should probably:",
    "options": [
      "Check what is running/heat",
      "Open more tabs",
      "Put it under a pillow",
      "Ignore it"
    ],
    "a": "Check what is running/heat",
    "explanation": "High workload or heat can make fans loud."
  },
  {
    "id": "CV-0593",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, which sounds like a fake tech startup?",
    "options": [
      "Quantum Banana",
      "Microsoft",
      "Mozilla",
      "Google"
    ],
    "a": "Quantum Banana",
    "explanation": "It sounds invented."
  },
  {
    "id": "CV-0594",
    "category": "WEIRD & RANDOM",
    "q": "In a college tech challenge, your phone falls face-down. First thing you check?",
    "options": [
      "The screen",
      "Weather",
      "Wi-Fi password",
      "Attendance"
    ],
    "a": "The screen",
    "explanation": "Immediate survival check."
  },
  {
    "id": "CV-0595",
    "category": "WEIRD & RANDOM",
    "q": "Your team is playing and which is most likely an image file?",
    "options": [
      ".jpg",
      ".mp4",
      ".txt",
      ".csv"
    ],
    "a": ".jpg",
    "explanation": "JPG is an image format."
  },
  {
    "id": "CV-0596",
    "category": "WEIRD & RANDOM",
    "q": "In CarbonVScode, which is most likely a video file?",
    "options": [
      ".mp4",
      ".txt",
      ".jpg",
      ".csv"
    ],
    "a": ".mp4",
    "explanation": "MP4 is a common video format."
  },
  {
    "id": "CV-0597",
    "category": "WEIRD & RANDOM",
    "q": "Five minutes before the demo, which sounds most like internet slang?",
    "options": [
      "LOL",
      "RAM",
      "CPU",
      "HTTP"
    ],
    "a": "LOL",
    "explanation": "LOL is common online slang."
  },
  {
    "id": "CV-0598",
    "category": "WEIRD & RANDOM",
    "q": "During a 30-second round, a mysterious software error appears. Most useful first move?",
    "options": [
      "Search the exact error",
      "Increase brightness",
      "Rename laptop",
      "Change ringtone"
    ],
    "a": "Search the exact error",
    "explanation": "The error text often gives useful clues."
  },
  {
    "id": "CV-0599",
    "category": "QUICKFIRE",
    "q": "In a college tech challenge, which key usually starts a new line?",
    "options": [
      "Enter",
      "Shift",
      "Ctrl",
      "Esc"
    ],
    "a": "Enter",
    "explanation": "Enter starts a new line."
  },
  {
    "id": "CV-0600",
    "category": "QUICKFIRE",
    "q": "Your team is playing and which symbol is common in email addresses?",
    "options": [
      "@",
      "#",
      "$",
      "%"
    ],
    "a": "@",
    "explanation": "It separates the username and domain."
  }
];
