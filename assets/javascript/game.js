//Initial Variables
var wins = 0;
var guessesRemaining = 12;
var gameFinished = false;

//Computer Choice Array:
var wordArray = ["have", "that", "with", "this", "they", "from", "that", "what", "their", "would", "make", "about", "know", "will", "time", 
"there", "year", "think", "when", "which", "them", "some", "people", "take", "into", "just", "your", "come", "could", "than", 
"like", "other", "then", "more", "these", "want", "look", "first", "also", "because", "more", "find", "here", "thing", "give", 
"many", "well", "only", "those", "tell", "very", "even", "back", "good", "woman", "through", "life", "child", "there", "work", 
"down", "after", "should", "call", "world", "over", "school", "still", "last", "need", "feel", "three", "when", "state", "never", 
"become", "between", "high", "really", "something", "most", "another", "much", "family", "leave", "while", "mean", "keep", "student", "great", 
"same", "group", "begin", "seem", "country", "help", "talk", "where", "turn", "problem", "every", "start", "hand", "might", "merican", 
"show", "part", "about", "against", "place", "over", "such", "again", "case", "most", "week", "company", "where", "system", "each", 
"right", "program", "hear", "question", "during", "work", "play", "government", "small", "number", "always", "move", "like", "night", "live", 
"point", "believe", "hold", "today", "bring", "happen", "next", "without", "before", "large", "million", "must", "home", "under", "water", 
"room", "write", "mother", "area", "national", "money", "story", "young", "fact", "month", "different", "right", "study", "book", "word", 
"though", "business", "issue", "side", "kind", "four", "head", "black", "long", "both", "little", "house", "after", "since", "long", 
"provide", "service", "around", "friend", "important", "father", "away", "until", "power", "hour", "game", "often", "line", "political", "among", 
"ever", "stand", "lose", "however", "member", "meet", "city", "almost", "include", "continue", "later", "community", "much", "name", "five", 
"once", "white", "least", "president", "learn", "real", "change", "team", "minute", "best", "several", "idea", "body", "information", "nothing", 
"right", "lead", "social", "understand", "whether", "back", "watch", "together", "follow", "around", "parent", "only", "stop", "face", "anything", 
"create", "public", "already", "speak", "others", "read", "level", "allow", "office", "spend", "door", "health", "person", "sure", "such", 
"history", "party", "within", "grow", "result", "open", "change", "morning", "walk", "reason", "research", "girl", "early", "food", "before", 
"moment", "himself", "teacher", "force", "offer", "enough", "both", "education", "across", "although", "remember", "foot", "second", "maybe", "toward", 
"able", "policy", "everything", "love", "process", "music", "including", "consider", "appear", "actually", "probably", "human", "wait", "serve", "market", 
"send", "expect", "home", "sense", "build", "stay", "fall", "nation", "plan", "college", "interest", "death", "course", "someone", "experience", 
"behind", "reach", "local", "kill", "remain", "effect", "yeah", "suggest", "class", "control", "raise", "care", "perhaps", "little", "late", 
"hard", "field", "else", "pass", "former", "sell", "major", "sometimes", "require", "along", "development", "themselves", "report", "role", "better", 
"economic", "effort", "decide", "rate", "strong", "possible", "heart", "drug", "show", "leader", "light", "voice", "wife", "whole", "police", 
"mind", "finally", "pull", "return", "free", "military", "price", "report", "less", "according", "decision", "explain", "hope", "even", "develop", 
"view", "relationship", "carry", "town", "road", "drive", "true", "federal", "break", "better", "difference", "thank", "receive", "value", "international", 
"building", "action", "full", "model", "join", "season", "society", "because", "director", "early", "position", "player", "agree", "especially", "record", 
"pick", "wear", "paper", "special", "space", "ground", "form", "support", "event", "official", "whose", "matter", "everyone", "center", "couple", 
"site", "project", "base", "activity", "star", "table", "need", "court", "produce", "merican", "teach", "half", "situation", "easy", "cost", 
"industry", "figure", "face", "street", "image", "itself", "phone", "either", "data", "cover", "quite", "picture", "clear", "practice", "piece", 
"land", "recent", "describe", "product", "doctor", "wall", "patient", "worker", "news", "test", "movie", "certain", "north", "love", "personal", 
"open", "support", "simply", "third", "technology", "catch", "step", "baby", "computer", "type", "attention", "draw", "film", "epublican", "tree", 
"source", "nearly", "organization", "choose", "cause", "hair", "look", "point", "century", "evidence", "window", "difficult", "listen", "soon", "culture", 
"billion", "chance", "brother", "energy", "period", "course", "summer", "less", "realize", "hundred", "available", "plant", "likely", "opportunity", "term", "short", "letter", "condition", "choice", "place", "single", "rule", "daughter", "administration", "south", "husband", "ongress", "floor", "campaign", "material", "population", "well", "call", "economy", "medical", "hospital", "church", "close", "thousand", "risk", "current", "fire", "future", "wrong", "involve", "defense", "anyone", "increase", "security", "bank", "myself", "certainly", "west", "sport", "board", "seek", "subject", "officer", "private", "rest", "behavior", "deal", "performance", "fight", "throw", "quickly", "past", "goal", "second", "order", "author", "fill", "represent", "focus", "foreign", "drop", "plan", "blood", "upon", "agency", "push", "nature", "color", "recently", "store", "reduce", "sound", "note", "fine", "before", 
"near", "movement", "page", "enter", "share", "than", "common", "poor", "other", "natural", "race", "concern", "series", "significant", "similar", 
"language", "each", "usually", "response", "dead", "rise", "animal", "factor", "decade", "article", "shoot", "east", "save", "seven", "artist", 
"away", "scene", "stock", "career", "despite", "central", "eight", "thus", "treatment", "beyond", "happy", "exactly", "protect", "approach", "size", 
"fund", "serious", "occur", "media", "ready", "sign", "thought", "list", "individual", "simple", "quality", "pressure", "accept", "answer", "hard", 
"resource", "identify", "left", "meeting", "determine", "prepare", "disease", "whatever", "success", "argue", "particularly", "amount", "ability", "staff", "recognize", "indicate", "character", "growth", "loss", "degree", "wonder", "attack", "herself", "region", "television", "training", "pretty", "trade", "deal", "election", "everybody", "physical", "general", "feeling", "standard", "bill", "message", "fail", "outside", "arrive", "analysis", "benefit", "name", "forward", "lawyer", "present", "section", "environmental", "glass", "answer", "skill", "sister", "professor", "operation", "financial", "crime", "stage", "compare", "authority", "miss", "design", "sort", "knowledge", "station", "blue", "state", "strategy", "little", "clearly", "discuss", "indeed", "force", "truth", "song", "example", "democratic", "check", "environment", "dark", "public", "various", "rather", "laugh", "guess", "executive", "study", "prove", "hang", "entire", "rock", "design", "enough", "forget", "since", "claim", "note", "remove", "manager", "help", "close", "sound", "enjoy", "network", "legal", "religious", "cold", "form", "final", "main", "science", "green", "memory", "card", "above", "seat", "cell", "establish", "nice", "trial", "expert", "that", "spring", "firm", "emocrat", "radio", "visit", "management", "care", "avoid", "imagine", "tonight", "huge", "ball", "close", "finish", "yourself", "talk", "theory", "impact", "respond", "statement", "maintain", "charge", "popular", "traditional", "onto", "reveal", "direction", "weapon", "employee", "cultural", "contain", "peace", "head", "control", "base", "pain", "apply", "play", "measure", "wide", "shake", "interview", "manage", "chair", "fish", "particular", "camera", "structure", "politics", "perform", "weight", "suddenly", "discover", "candidate", "production", "treat", "trip", "evening", "affect", "inside", "conference", "unit", "best", "style", "adult", "worry", "range", "mention", "rather", "deep", "past", "edge", "individual", "specific", "writer", "trouble", "necessary", "throughout", "challenge", "fear", "shoulder", "institution", "middle", "dream", "beautiful", "property", "instead", "improve", "stuff", "detail", "method", "sign", "somebody", "magazine", "hotel", "soldier", "reflect", "heavy", "sexual", "cause", "heat", "fall", "marriage", "tough", "sing", "surface", "purpose", "exist", "pattern", "whom", "skin", "agent", "owner", "machine", "down", "ahead", "generation", "commercial", "address", "cancer", "test", "item", "reality", "coach", "step", "yard", "beat", "violence", "total", "tend", "investment", "discussion", "finger", "garden", "notice", "collection", "modern", "task", "partner", "positive", "civil", "kitchen", "consumer", "shot", "budget", "wish", "painting", "scientist", "safe", "agreement", "capital", "mouth", "victim", "newspaper", "instead", "threat", "responsibility", "smile", "attorney", "score", "account", "interesting", "break", "audience", "rich", "dinner", "figure", "vote", "western", "relate", "travel", "debate", "prevent", "citizen", "majority", "none", "front", "born", "admit", "senior", "assume", "wind", "professional", "mission", "fast", "alone", "customer", "suffer", "speech", "successful", "option", "participant", "southern", "fresh", "eventually", "forest", "video", "global", "enate", "reform", "access", "restaurant", "judge", "publish", "cost", "relation", "like", "release", "bird", "opinion", "credit", "critical", "corner", "concerned", "recall", "version", "stare", "safety", "effective", "neighborhood", "original", "troop", "income", "directly", "hurt", "species", "immediately", "track", "basic", "strike", "hope", "freedom", "absolutely", "plane", "nobody", "achieve", "object", "attitude", "labor", "refer", "concept", "client", "powerful", "perfect", "nine", "therefore", "conduct", "announce", "conversation", "examine", "touch", "please", "attend", "completely", "vote", "variety", "sleep", "turn", "involved", "investigation", "nuclear", "researcher", "press", "conflict", "spirit", "experience", "replace", "ritish", "encourage", "argument", "once", "camp", "brain", "feature", "afternoon", "weekend", "dozen", "possibility", "along", "insurance", "department", "battle", "beginning", "date", "generally", "frican", "very", "sorry", "crisis", "complete", "stick", "define", "easily", "through", "hole", "element", "vision", "status", "normal", "hinese", "ship", "solution", "stone", "slowly", "scale", "university", "introduce", "driver", "attempt", "park", "spot", "lack", "boat", "drink", "front", "distance", "wood", "handle", "truck", "return", "mountain", "survey", "supposed", "tradition", "winter", "village", "oviet", "refuse", "sales", "roll", "communication", "screen", "gain", "resident", "hide", "gold", "club", "future", "farm", "potential", "increase", "middle", "uropean", "presence", 
"independent", "district", "shape", "reader", "contract", "crowd", "hristian", "express", "apartment", "willing", "strength", "previous", "band", "obviously", "horse", "interested", "target", "prison", "ride", "guard", "terms", "demand", "reporter", "deliver", "text", "share", "tool", "wild", "vehicle", "observe", "flight", "inside", "facility", "understanding", "average", "emerge", "advantage", "quick", "light", "leadership", "earn", "pound", "basis", "bright", "operate", "guest", "sample", "contribute", "tiny", "block", "protection", "settle", "feed", "collect", "additional", "while", "highly", "identity", "title", "mostly", "lesson", "faith", "river", "promote", "living", "present", "count", "unless", "marry", "tomorrow", "technique", "path", "shop", "folk", "order", "principle", "survive", "lift", "border", "competition", "jump", "gather", "limit", "claim", "equipment", "worth", "associate", "critic", "warm", "aspect", "result", "insist", "failure", "annual", "rench", "hristmas", "comment", "responsible", "affair", "approach", "until", "procedure", "regular", "spread", "chairman", "baseball", "soft", "ignore", "measure", "belief", "demonstrate", "anybody", "murder", "gift", "religion", "review", "editor", "past", "engage", "coffee", "document", "speed", "cross", "influence", "anyway", "threaten", "commit", "female", "youth", "wave", "move", "afraid", "quarter", "background", "native", "broad", "wonderful", "deny", "apparently", "slightly", "reaction", "twice", "suit", "perspective", "growing", "blow", "construction", "kind", "intelligence", "destroy", "cook", "connection", "charge", "burn", "shoe", "view", "grade", "context", "committee", "mistake", "focus", "smile", "location", "clothes", "indian", "quiet", "dress", "promise", "aware", "neighbor", "complete", "drive", "function", "bone", "active", "extend", "chief", "average", "combine", "wine", "below", "cool", "voter", "mean", "demand", "learning", "hell", "dangerous", "remind", "moral", "nited", "category", "relatively", "victory", "academic", "visit", "nternet", "healthy", "fire", "negative", "following", "historical", "medicine", "tour", "depend", "photo", "finding", "grab", "direct", "classroom", "contact", "justice", "participate", "daily", "fair", "pair", "famous", "exercise", "knee", "flower", "tape", "hire", "familiar", "appropriate", "supply", "fully", "will", "actor", "birth", "search", "democracy", "eastern", "primary", "yesterday", "circle", "device", "progress", "next", "front", "bottom", "island", "exchange", "clean", "studio", "train", "lady", "colleague", "application", "neck", "lean", "damage", "plastic", "tall", "plate", "hate", "otherwise", "writing", "press", "male", "start", "alive", "expression", "football", "intend", "attack", "chicken", "army", "abuse", "theater", "shut", "extra", "session", "danger", "welcome", "domestic", "lots", "literature", "rain", "desire", "assessment", "injury", "respect", "northern", "paint", "fuel", "leaf", "direct", "ussian", "instruction", "fight", "pool", "climb", "sweet", "lead", "engine", "fourth", "salt", "expand", "importance", "metal", "ticket", "software", "disappear", "corporate", "strange", "reading", "urban", "mental", "increasingly", "lunch", "educational", "somewhere", "farmer", "above", "sugar", "planet", "favorite", "explore", "obtain", "enemy", "greatest", "complex", "surround", "athlete", "invite", "repeat", "carefully", "soul", "scientific", "impossible", "panel", "meaning", "married", "alone", "instrument", "predict", "weather", "presidential", "emotional", "commitment", "upreme", "bear", "pocket", "thin", "temperature", "surprise", "poll", "proposal", "consequence", "half", "breath", "sight", "cover", "balance", "adopt", "minority", "straight", "attempt", "connect", "works", "teaching", "belong", "advice", "okay", "photograph", "empty", "regional", "trail", "novel", "code", "somehow", "organize", "jury", "breast", "raqi", "human", "acknowledge", "theme", "storm", "union", "record", "desk", "fear", "thanks", "fruit", "under", "expensive", "yellow", "conclusion", "prime", "shadow", "struggle", "conclude", "analyst", "dance", "limit", "like", "regulation", "being", "last", "ring", "largely", "shift", "revenue", "mark", "locate", "county", "appearance", "package", "difficulty", "bridge", "recommend", "obvious", "train", "basically", "mail", "generate", "anymore", "propose", "thinking", "possibly", "trend", "visitor", "loan", "currently", "comfortable", "investor", "profit", "angry", "crew", "deep", "accident", "male", "meal", "hearing", "traffic", "muscle", "notion", "capture", "prefer", "truly", "earth", "apanese", "chest", "search", "thick", "cash", "museum", "beauty", "emergency", "unique", "feature", "internal", "ethnic", "link", "stress", "content", "select", "root", "nose", "declare", "outside", "appreciate", "actual", "bottle", "hardly", "setting", "launch", "dress", "file", "sick", "outcome", "defend", "matter", "judge", "duty", "sheet", "ought", "ensure", "atholic", "extremely", "extent", "component", "term", "slow", "contrast", "zone", "wake", "challenge", "airport", "chief", "brown", "standard", "shirt", "pilot", "warn", "ultimately", "contribution", "capacity", "ourselves", "estate", "guide", "circumstance", "snow", "nglish", "politician", "steal", "pursue", "slip", "percentage", "meat", "funny", "neither", "soil", "influence", "surgery", "correct", "ewish", "blame", "estimate", "basketball", "late", "golf", "investigate", "crazy", "significantly", "chain", "address", "branch", "combination", "just", "frequently", "governor", "relief", "user", "kick", "part", "manner", "ancient", "silence", "rating", "golden", "motion", "erman", "gender", "solve", "landscape", "used", "bowl", "equal", "long", "official", "forth", "frame", "typical", "except", "conservative", "eliminate", "host", "hall", "trust", "ocean", "score", "producer", "afford", "meanwhile", "regime", "division", "confirm", "appeal", "mirror", "tooth", "smart", "length", "entirely", "rely", "topic", "complain", "issue", "variable", "back", "range", "telephone", "perception", "attract", "confidence", "bedroom", "secret", "debt", "rare", "tank", "nurse", "coverage", "opposition", "aside", "anywhere", "bond", "file", "pleasure", "master", "requirement", "check", "stand", "expectation", "wing", "separate", "clear", "struggle", "mean", "somewhat", "pour", "stir", "judgment", "clean", "except", "beer", "nglish", "reference", "tear", "doubt", "grant", "seriously", "account", "minister", "totally", "hero", "industrial", "cloud", "stretch", "winner", "volume", "travel", "seed", "surprised", "rest", "fashion", "pepper", "separate", "busy", "intervention", "copy", "below", "cheap", "cite", "welfare","vegetable", "gray", "dish", "beach", "improvement", "everywhere", "opening", "overall", "divide", "initial", "terrible", "oppose", "contemporary", "route", "multiple", "essential", "question", "league", "criminal", "careful", "core", "upper", "rush", "necessarily", "specifically", "tired", "rise", "employ", "holiday", "dance", "vast", "resolution", "household", "fewer", "abortion", "apart", "witness", "match", "barely", "sector", "representative", "lack", "beneath", "beside", "black", "incident", "limited", "proud", "flow", "faculty", "increased", "waste", "merely", "mass", "emphasize", "experiment", "definitely", "bomb", "enormous", "tone", "liberal", "massive", "engineer", "wheel", "female", "decline", "invest", "promise", "cable", "towards", "expose", "rural", "narrow", "cream", "secretary", "gate", "solid", "hill", "typically", "noise", "grass", "unfortunately", "legislation", "succeed", "either", "celebrate", "achievement", "fishing", "drink", "accuse", "hand", "useful", "land", "secret", "reject", "talent", "taste", "characteristic", "milk", "escape", "cast", "sentence", "unusual", "closely", "convince", "height", "physician", "assess", "sleep", "plenty", "ride", "virtually", "first", "addition", "sharp", "creative", "lower", "behind", "approve", "explanation", "outside", "campus", "proper", "live", "guilty", "living", "acquire", "compete", "technical", "plus", "mind", "potential", "immigrant", "weak", "illegal", "alternative", "interaction", "column", "personality", "signal", "curriculum", "list", "honor", "passenger", "assistance", "forever", "regard", "sraeli", "association", "twenty", "knock", "review", "wrap", "offer", "display", "criticism", "asset", "depression", "spiritual", "musical", "journalist", "prayer", "suspect", "scholar", "warning", "climate", "cheese", "observation", "childhood", "payment", "permit", "cigarette", "definition", "priority", "bread", "creation", "graduate", "request", "emotion", "scream", "dramatic", "universe", "excellent", "deeply", "prosecutor", "mark", "green", "lucky", "drag", "airline", "library", "agenda", "recover", "factory", "selection", "primarily", "roof", "unable", "expense", "initiative", "diet", "arrest", "funding", "therapy", "wash", "schedule", "brief", "housing", "post", "purchase", "existing", "dark", "steel", "regarding", "shout", "remaining", "visual", "fairly", "chip", "violent", "silent", "suppose", "self", "bike", "perceive", "comparison", "settlement", "layer", "planning", "description", "later", "slow", "slide", "widely", "wedding", "inform", "portion", "territory", "immediate", "opponent", 
"abandon", "link", "mass", "lake", "transform", "tension", "display", "leading", "bother", "consist", "alcohol", "enable", "bend", "saving", "gain", 
"desert", "shall", "error", "release", "double", "walk", "sand", "panish", "rule", "print", "preserve", "passage", "formal", "transition", "existence", 
"album", "participation", "arrange", "atmosphere", "joint", "reply", "cycle", "opposite", "lock", "whole", "deserve", "consistent", "resistance", "discovery", "tear", "exposure", "pose", "stream", "sale", "trust", "benefit", "grand", "mine", "hello", "coalition", "tale", "knife", "resolve", "racial", "phase", "present", "joke", "coat", "exican", "symptom", "contact", "manufacturer", "philosophy", "potato", "interview", "foundation", "quote", "online", "pass", "negotiation", "good", "urge", "occasion", "dust", "breathe", "elect", "investigator", "jacket", "glad", "ordinary", "reduction", "rarely", "shift", "pack", "suicide", "numerous", "touch", "substance", "discipline", "elsewhere", "iron", "practical", "moreover", "passion", "volunteer", "implement", "essentially", "gene", "enforcement", "sauce", 
"independence", "marketing", "priest", "amazing", "intense", "advance", "employer", "shock", "inspire", "adjust", "retire", "sure", "visible", "kiss", "illness", 
"habit", "competitive", "juice", "congressional", "involvement", "dominate", "previously", "whenever", "transfer", "analyze", "another", "attach", "ndian", "disaster", "parking", 
"prospect", "boss", "complaint", "championship", "coach", "exercise", "fundamental", "severe", "enhance", "mystery", "impose", "poverty", "other", "entry", "spending", 
"king", "evaluate", "symbol", "still", "trade", "maker", "mood", "accomplish", "emphasis", "illustrate", "boot", "monitor", "sian", "entertainment", "bean", 
"evaluation", "creature", "commander", "digital", "arrangement", "concentrate", "total", "usual", "anger", "psychological", "heavily", "peak", "approximately", "increasing", "disorder", 
"missile", "equally", "vary", "wire", "round", "distribution", "transportation", "holy", "ring", "twin", "command", "commission", "interpretation", "breakfast", "stop", 
"strongly", "engineering", "luck", "called", "constant", "race", "clinic", "veteran", "smell", "tablespoon", "capable", "nervous", "tourist", "light", "toss", 
"crucial", "bury", "pray", "tomato", "exception", "butter", "deficit", "bathroom", "objective", "block", "electronic", "ally", "journey", "reputation", "mixture", 
"surely", "tower", "smoke", "confront", "pure", "glance", "dimension", "prisoner", "fellow", "smooth", "nearby", "peer", "designer", "personnel", "shape", 
"educator", "relative", "immigration", "belt", "teaspoon", "birthday", "implication", "perfectly", "coast", "supporter", "accompany", "silver", "teenager", "recognition", "retirement", 
"flag", "recovery", "whisper", "watch", "gentleman", "corn", "moon", "inner", "junior", "rather", "throat", "salary", "swing", "observer", "straight", 
"publication", "pretty", "crop", "strike", "permanent", "plant", "phenomenon", "anxiety", "unlike", "literally", "resist", "convention", "embrace", "supply", "assist", 
"exhibition", "construct", "viewer", "consultant", "soon", "line", "administrator", "date", "occasionally", "mayor", "consideration", "secure", "pink", "smoke", "estimate", 
"buck", "historic", "poem", "grandmother", "bind", "fifth", "constantly", "enterprise", "favor", "testing", "stomach", "apparent", "weigh", "install", "sensitive", 
"suggestion", "mail", "recipe", "reasonable", "preparation", "wooden", "elementary", "concert", "aggressive", "false", "intention", "channel", "extreme", "tube", "drawing", 
"protein", "quit", "absence", "roll", "atin", "rapidly", "jail", "comment", "diversity", "honest", "alestinian", "pace", "employment", "speaker", "impression", 
"essay", "respondent", "giant", "cake", "historian", "negotiate", "restore", "substantial", "particular", "specialist", "origin", "approval", "mine", "quietly", "advise", 
"conventional", "drop", "count", "depth", "wealth", "disability", "shell", "general", "criticize", "fast", "professional", "effectively", "biological", "pack", "onion", 
"deputy", "flat", "brand", "assure", "award", "criteria", "dealer", "alternative", "utility", "precisely", "arise", "armed", "nevertheless", "highway", "clinical", 
"routine", "schedule", "wage", "normally", "phrase", "ingredient", "stake", "uslim", "dream", "fiber", "activist", "slamic", "snap", "terrorism", "refugee", 
"incorporate", "ultimate", "switch", "corporation", "valuable", "assumption", "gear", "graduate", "barrier", "minor", "provision", "killer", "assign", "gang", "developing", 
"classic", "chemical", "wave", "label", "teen", "index", "vacation", "advocate", "draft", "extraordinary", "heaven", "rough", "yell", "pregnant", "distant", 
"drama", "satellite", "personally", "wonder", "clock", "chocolate", "talian", "anadian", "ceiling", "sweep", "advertising", "universal", "spin", "house", "button", 
"bell", "rank", "darkness", "ahead", "clothing", "super", "yield", "fence", "portrait", "paint", "survival", "roughly", "lawsuit", "bottom", "testimony", 
"bunch", "beat", "wind", "found", "burden", "react", "chamber", "furniture", "cooperation", "string", "ceremony", "communicate", "taste", "cheek", "lost", 
"profile", "mechanism", "disagree", "like", "penalty", "match", "advance", "resort", "destruction", "bear", "unlikely", "tissue", "constitutional", "pant", "stranger", 
"infection", "cabinet", "broken", "apple", "electric", "proceed", "track", "literary", "virus", "stupid", "dispute", "fortune", "strategic", "assistant", "overcome", 
"remarkable", "occupy", "statistics", "shopping", "cousin", "encounter", "wipe", "initially", "blind", "white", "port", "honor", "electricity", "genetic", "adviser", 
"spokesman", "retain", "latter", "incentive", "slave", "chemical", "translate", "accurate", "whereas", "terror", "though", "expansion", "elite", "lympic", "dirt", 
"rice", "bullet", "tight", "ible", "chart", "solar", "decline", "conservative", "process", "square", "stick", "concentration", "complicated", "gently", "champion", 
"scenario", "telescope", "reflection", "revolution", "strip", "interpret", "friendly", "tournament", "fiction", "detect", "balance", "likely", "tremendous", "lifetime", "recommendation", 
"flow", "senator", "market", "hunting", "salad", "guarantee", "innocent", "boundary", "pause", "remote", "satisfaction", "journal", "bench", "lover", "awareness", 
"surprising", "withdraw", "general", "deck", "similarly", "newly", "pole", "testify", "mode", "dialogue", "imply", "naturally", "mutual", "founder", "advanced", 
"pride", "dismiss", "aircraft", "delivery", "mainly", "bake", "freeze", "platform", "finance", "sink", "attractive", "respect", "diverse", "relevant", "ideal", 
"worth", "regularly", "working", "singer", "evolve", "shooting", "partly", "unknown", "assistant", "offense", "counter", "smell", "potentially", "transfer", "thirty", 
"justify", "protest", "crash", "craft", "treaty", "terrorist", "insight", "possess", "politically", "extensive", "episode", "double", "swim", "tire", "fault", 
"loose", "free", "shortly", "originally", "considerable", "prior", "intellectual", "assault", "relax", "stair", "adventure", "external", "proof", "confident", "headquarters", 
"sudden", "dirty", "violation", "tongue", "license", "hold", "shelter", "controversy", "entrance", "favorite", "practice", "properly", "fade", "defensive", "tragedy", 
"characterize", "funeral", "profession", "alter", "spot", "constitute", "establishment", "squeeze", "imagination", "target", "mask", "convert", "comprehensive", "prominent", "presentation", 
"regardless", "easy", "load", "stable", "introduction", "appeal", "pretend", "elderly", "representation", "deer", "split", "violate", "partnership", "pollution", "emission", 
"steady", "vital", "neither", "fate", "earnings", "oven", "distinction", "segment", "nowhere", "poet", "mere", "exciting", "variation", "comfort", "radical", 
"stress", "adapt", "rish", "honey", "correspondent", "pale", "musician", "significance", "load", "round", "vessel", "storage", "flee", "leather", "distribute", 
"evolution", "tribe", "shelf", "grandfather", "lawn", "buyer", "dining", "wisdom", "council", "vulnerable", "instance", "garlic", "capability", "poetry", "celebrity", 
"gradually", "stability", "doubt", "fantasy", "scared", "guide", "plot", "framework", "gesture", "depending", "ongoing", "psychology", "since", "counselor", "witness", 
"chapter", "fellow", "divorce", "pipe", "athletic", "slight", "math", "shade", "tail", "sustain", "mount", "obligation", "angle", "palm", "differ", 
"custom", "store", "economist", "fifteen", "soup", "celebration", "efficient", "damage", "composition", "satisfy", "pile", "briefly", "carbon", "closer", "consume", 
"scheme", "crack", "frequency", "tobacco", "survivor", "besides", "psychologist", "wealthy", "galaxy", "given", "fund", "limitation", "trace", "appointment", "preference", 
"meter", "explosion", "arrest", "publicly", "incredible", "fighter", "rapid", "admission", "hunter", "educate", "painful", "friendship", "aide", "infant", "calculate", 
"fifty", "porch", "tendency", "uniform", "formation", "scholarship", "reservation", "efficiency", "waste", "qualify", "mall", "derive", "scandal", "helpful", "impress", 
"heel", "resemble", "privacy", "fabric", "surprise", "contest", "proportion", "guideline", "rifle", "maintenance", "conviction", "trick", "organic", "tent", "examination", 
"publisher", "strengthen", "rench", "proposed", "myth", "sophisticated", "standing", "asleep", "tennis", "nerve", "barrel", "bombing", "membership", "ratio", "menu", 
"purchase", "controversial", "desperate", "rate", "lifestyle", "humor", "loud", "glove", "suspect", "sufficient", "narrative", "photographer", "helicopter", "atholic", "modest", 
"provider", "delay", "agricultural", "explode", "stroke", "scope", "punishment", "handful", "badly", "horizon", "curious", "downtown", "girlfriend", "prompt", "request", 
"cholesterol", "absorb", "adjustment", "taxpayer", "eager", "principal", "detailed", "motivation", "assignment", "restriction", "across", "alestinian", "laboratory", "workshop", "differently", 
"auto", "romantic", "cotton", "motor", "flavor", "overlook", "float", "undergo", "sequence", "demonstration", "orange", "consumption", "assert", "blade", "temporary", 
"medication", "print", "cabin", "bite", "relative", "edition", "valley", "yours", "pitch", "pine", "brilliant", "versus", "manufacturing", "risk", "hristian", 
"complex", "absolute", "chef", "discrimination", "offensive", "erman", "suit", "boom", "register", "appoint", "heritage", "terrorist", "dominant", "successfully", "shit", 
"lemon", "hungry", "sense", "wander", "submit", "economics", "naked", "anticipate", "legacy", "extension", "shrug", "battery", "arrival", "legitimate", "orientation", 
"inflation", "cope", "flame", "cluster", "host", "wound", "dependent", "shower", "institutional", "depict", "operating", "flesh", "garage", "operator", "instructor", 
"collapse", "borrow", "furthermore", "comedy", "mortgage", "sanction", "civilian", "twelve", "weekly", "habitat", "grain", "brush", "consciousness", "devote", "crack", 
"measurement", "province", "ease", "seize", "ethics", "nomination", "permission", "wise", "actress", "summit", "acid", "odds", "gifted", "frustration", "medium", 
"function", "physically", "grant", "distinguish", "shore", "repeatedly", "lung", "firm", "running", "correct", "distinct", "artistic", "discourse", "basket", "fighting", 
"impressive", "competitor", "ugly", "worried", "portray", "powder", "ghost", "persuade", "moderate", "subsequent", "continued", "cookie", "carrier", "cooking", "frequent", 
"swing", "orange", "awful", "admire", "miracle", "exceed", "rhythm", "widespread", "killing", "lovely", "charity", "script", "tactic", "identification", "transformation", 
"everyday", "headline", "crash", "venture", "invasion", "military", "nonetheless", "adequate", "piano", "grocery", "intensity", "exhibit", "high", "blanket", "margin", 
"principal", "quarterback", "mouse", "rope", "concrete", "prescription", "merican", "chase", "document", "brick", "recruit", "patch", "consensus", "horror", "recording", 
"changing", "painter", "colonial", "sake", "gaze", "courage", "pregnancy", "swear", "defeat", "clue", "reinforce", "confusion", "slice", "occupation", "dear", 
"coal", "sacred", "criminal", "formula", "cognitive", "collective", "exact", "uncle", "square", "captain", "sigh", "attribute", "dare", "okay", "homeless", 
"cool", "gallery", "soccer", "defendant", "tunnel", "fitness", "grave", "container", "virtue", "abroad", "architect", "dramatically", "makeup", "inquiry", "rose", 
"surprisingly", "highlight", "decrease", "indication", "rail", "anniversary", "couch", "alliance", "hypothesis", "boyfriend", "compose", "peer", "mess", "rank", "legend", 
"regulate", "adolescent", "shine", "norm", "upset", "remark", "resign", "reward", "gentle", "related", "organ", "lightly", "concerning", "invent", "laughter", 
"northwest", "counseling", "tight", "receiver", "ritual", "insect", "interrupt", "salmon", "favor", "trading", "concern", "magic", "superior", "combat", "stem", 
"surgeon", "acceptable", "physics", "rape", "counsel", "brush", "jeans", "hunt", "continuous", "echo", "pill", "excited", "sculpture", "compound", "integrate", 
"flour", "bitter", "bare", "slope", "rent", "presidency", "serving", "subtle", "greatly", "bishop", "drinking", "delay", "acceptance", "collapse", "shop", 
"pump", "candy", "evil", "final", "finance", "pleased", "medal", "sponsor", "ethical", "secondary", "slam", "export", "experimental", "melt", "midnight", 
"curve", "integrity", "entitle", "evident", "logic", "essence", "park", "exclude", "harsh", "closet", "suburban", "greet", "favor", "interior", "corridor", 
"murder", "retail", "pitcher", "march", "snake", "pitch", "excuse", "cross", "weakness", "cold", "classical", "estimated", "shirt", "online", "unemployment", 
"civilization", "fold", "patient", "daily", "reverse", "missing", "correlation", "humanity", "flash", "developer", "reliable", "excitement", "beef", "slam", "oman", 
"stretch", "architecture", "occasional", "administrative", "elbow", "deadly", "uslim", "ispanic", "allegation", "confuse", "airplane", "monthly", "duck", "dose", "orean", 
"plead", "initiate", "lecture", "sixth", "mainstream", "suburb", "sandwich", "unlike", "trunk", "rumor", "implementation", "swallow", "motivate", "render", "longtime", 
"trap", "restrict", "cloth", "seemingly", "legislative", "effectiveness", "enforce", "lens", "reach", "inspector", "lend", "plain", "fraud", "companion", "contend", 
"nail", "array", "strict", "assemble", "frankly", "burst", "hallway", "cave", "inevitable", "southwest", "monster", "speed", "protest", "unexpected", "obstacle", 
"facilitate", "encounter", "herb", "overwhelming", "integration", "crystal", "recession", "wish", "written", "motive", "label", "flood", "ownership", "nightmare", "notice", 
"inspection", "supervisor", "consult", "arena", "laugh", "diagnosis", "possession", "forgive", "warm", "consistently", "basement", "project", "drift", "drain", "last", 
"prosecution", "maximum", "announcement", "warrior", "prediction", "bacteria", "questionnaire", "infrastructure", "hurry", "privilege", "temple", "medium", "outdoor", "suck", "broadcast", 
"leap", "random", "past", "wrist", "curtain", "monitor", "pond", "domain", "guilt", "cattle", "subject", "walking", "playoff", "minimum", "fiscal", 
"skirt", "dump", "hence", "database", "uncomfortable", "execute", "limb", "ideology", "average", "welcome", "tune", "continuing", "harm", "railroad", "endure", 
"radiation", "horn", "chronic", "peaceful", "innovation", "strain", "guitar", "replacement", "behave", "administer", "simultaneously", "dancer", "amendment", "guard", "transmission", 
"await", "retired", "trigger", "spill", "grateful", "grace", "virtual", "response", "colony", "adoption", "slide", "indigenous", "closed", "convict", "civilian", 
"towel", "modify", "particle", "award", "glance", "prize", "landing", "conduct", "blue", "boost", "alarm", "festival", "grip", "weird", "undermine", 
"freshman", "sweat", "outer", "uropean", "drunk", "survey", "research", "separation", "traditionally", "stuff", "govern", "southeast", "intelligent", "wherever", "ballot", 
"rhetoric", "convinced", "driving", "vitamin", "enthusiasm", "accommodate", "praise", "injure", "wilderness", "nearby", "endless", "mandate", "pause", "excuse", "respectively", 
"uncertainty", "chaos", "short", "mechanical", "canvas", "forty", "matter", "lobby", "profound", "format", "trait", "currency", "turkey", "reserve", "beam", 
"abuse", "astronomer", "corruption", "contractor", "apologize", "doctrine", "genuine", "thumb", "unity", "compromise", "horrible", "behavioral", "exclusive", "scatter", "commonly", 
"convey", "rush", "twist", "complexity", "fork", "disk", "relieve", "suspicion", "lock", "finish", "residence", "shame", "meaningful", "sidewalk", "lympics", 
"technological", "signature", "pleasant", "suspend", "rebel", "frozen", "desire", "spouse", "fluid", "pension", "resume", "theoretical", "sodium", "blow", "promotion", 
"delicate", "forehead", "rebuild", "bounce", "electrical", "hook", "detective", "traveler", "click", "compensation", "signal", "exit", "attraction", "dedicate", "altogether", 
"pickup", "carve", "needle", "belly", "ship", "scare", "portfolio", "shuttle", "invisible", "timing", "engagement", "ankle", "transaction", "rescue", "counterpart", 
"historically", "firmly", "mild", "rider", "doll", "noon", "exhibit", "amid", "identical", "precise", "anxious", "structural", "residential", "loud", "diagnose", 
"carbohydrate", "liberty", "poster", "theology", "nonprofit", "crawl", "oxygen", "handsome", "magic", "provided", "businessman", "promising", "conscious", "determination", "donor", 
"hers", "pastor", "jazz", "opera", "apanese", "bite", "frame", "evil", "acquisition", "wildlife", "punish", "giant", "primary", "equity", "wrong", 
"doorway", "departure", "elevator", "teenage", "guidance", "happiness", "statue", "pursuit", "repair", "decent", "oral", "clerk", "sraeli", "envelope", "reporting", 
"destination", "fist", "endorse", "exploration", "generous", "bath", "rescue", "thereby", "overall", "indicator", "sunlight", "feedback", "spectrum", "purple", "laser", 
"bold", "reluctant", "starting", "expertise", "practically", "program", "picture", "tune", "eating", "volunteer", "hint", "sharply", "parade", "advocate", "realm", 
"strip", "cancel", "blend", "therapist", "slice", "peel", "pizza", "recipient", "hesitate", "flip", "accounting", "debate", "bias", "metaphor", "candle", 
"handle", "worry", "judicial", "entity", "suffering", "time", "feel", "lamp", "garbage", "servant", "addition", "regulatory", "diplomatic", "elegant", "inside", 
"reception", "vanish", "automatically", "chin", "trail", "necessity", "confess", "racism", "starter", "interior", "banking", "casual", "gravity", "enroll", "diminish", 
"prevention", "value", "minimize", "chop", "performer", "intent", "isolate", "pump", "inventory", "productive", "assembly", "civic", "silk", "magnitude", "steep", 
"hostage", "collector", "popularity", "kiss", "alien", "dynamic", "scary", "equation", "angel", "switch", "offering", "rage", "photography", "repair", "toilet", 
"disappointed", "precious", "prohibit", "representative", "content", "realistic", "ussian", "hidden", "command", "tender", "wake", "gathering", "outstanding", "stumble", "lonely", 
"automobile", "artificial", "dawn", "abstract", "descend", "silly", "hook", "tide", "shared", "hopefully", "readily", "cooperate", "revolutionary", "romance", "hardware", 
"pillow", "cook", "spread", "continent", "seal", "circuit", "sink", "ruling", "shortage", "annually", "lately", "trap", "scan", "fool", "deadline", 
"rear", "processing", "ranch", "coastal", "undertake", "softly", "reserve", "burning", "verbal", "tribal", "ridiculous", "automatic", "diamond", "credibility", "import", 
"sexually", "spring", "divine", "sentiment", "cart", "oversee", "stem", "elder", "inspiration", "utch", "quantity", "trailer", "mate", "clock", "reek", 
"genius", "monument", "quest", "sacrifice", "invitation", "accuracy", "juror", "officially", "broker", "treasure", "loyalty", "credit", "shock", "talented", "gasoline", 
"stiff", "output", "nominee", "extended", "please", "diabetes", "slap", "toxic", "alleged", "grief", "mysterious", "rocket", "donate", "inmate", "tackle", 
"dynamics", "ours", "senior", "dignity", "carpet", "parental", "bubble", "heat", "buddy", "barn", "sword", "flash", "seventh", "glory", "tightly", 
"protective", "tuck", "drum", "faint", "post", "queen", "dilemma", "input", "specialize", "northeast", "shallow", "liability", "sail", "merchant", "stadium", 
"improved", "bloody", "defeat", "associated", "withdrawal", "refrigerator", "nest", "near", "thoroughly", "lane", "ancestor", "condemn", "steam", "accent", "escape", 
"optimistic", "unite", "cage", "equip", "shrimp", "homeland", "exchange", "rack", "costume", "wolf", "courtroom", "statute", "cartoon", "besides", "productivity", 
"grin", "symbolic", "seal", "bless", "aunt", "agriculture", "rock", "hostile", "root", "conceive", "combined", "instantly", "bankruptcy", "vaccine", "bonus", 
"collaboration", "mixed", "opposed", "orbit", "grasp", "patience", "spite", "tropical", "voting", "patrol", "willingness", "position", "revelation", "rent", "calm", 
"jewelry", "uban", "haul", "concede", "trace", "wagon", "afterward", "spectacular", "ruin", "sheer", "prior", "immune", "reliability", "alongside", "bush", 
"exotic", "fascinating", "secure", "clip", "thigh", "bull", "drawer", "regard", "sheep", "discourage", "coordinator", "ideological", "runner", "secular", "intimate", 
"empire", "divorce", "exam", "documentary", "neutral", "biology", "flexible", "progressive", "conspiracy", "catch", "casualty", "republic", "execution", "terrific", "whale", 
"functional", "star", "draft", "instinct", "teammate", "aluminum", "whoever", "ministry", "verdict", "instruct", "skull", "esteem", "ease", "cooperative", "manipulate", 
"practitioner", "loop", "edit", "whip", "puzzle", "mushroom", "subsidy", "boil", "tragic", "mathematics", "mechanic", "respect", "earthquake", "pork", "creativity", 
"safely", "underlying", "dessert", "sympathy", "fisherman", "incredibly", "isolation", "sock", "near", "jump", "eleven", "sexy", "entrepreneur", "syndrome", "bureau", 
"seat", "workplace", "ambition", "touchdown", "utilize", "breeze", "costly", "ambitious", "hristianity", "presumably", "influential", "translation", "uncertain", "dissolve", "object", 
"statistical", "metropolitan", "rolling", "aesthetic", "spell", "insert", "booth", "helmet", "expected", "lion", "accomplishment", "royal", "panic", "cast", "crush", 
"actively", "cliff", "minimal", "cord", "fortunately", "cocaine", "illusion", "anonymous", "tolerate", "appreciation", "commissioner", "harm", "flexibility", "instructional", "scramble", 
"casino", "tumor", "decorate", "sort", "charge", "pulse", "equivalent", "fixed", "experienced", "donation", "diary", "sibling", "irony", "spoon", "midst", 
"alley", "upset", "interact", "soap", "cute", "rival", "term", "punch", "hockey", "passing", "persist", "supplier", "known", "momentum", "purse", 
"shed", "liquid", "icon", "elephant", "consequently", "legislature", "associate", "franchise", "correctly", "mentally", "foster", "bicycle", "encouraging", "cheat", "access", 
"heal", "fever", "filter", "rabbit", "coin", "exploit", "accessible", "organism", "sensation", "partially", "stay", "upstairs", "dried", "minimum", "conservation", 
"shove", "backyard", "charter", "stove", "consent", "comprise", "reminder", "alike", "placement", "dough", "grandchild", "reportedly", "known", "surrounding", "ecological", 
"outfit", "unprecedented", "columnist", "workout", "preliminary", "patent", "quote", "trash", "disabled", "gross", "damn", "hormone", "texture", "counter", "pencil", 
"associate", "frontier", "spray", "disclose", "custody", "banker", "beast", "interfere", "case", "eighth", "notebook", "outline", "gaze", "attendance", "speculation", 
"uncover", "behalf", "innovative", "shark", "reward", "mill", "installation", "stimulate", "vertical", "swimming", "fleet", "catalog", "outsider", "sacrifice", "desperately", 
"stance", "compel", "sensitivity", "someday", "instant", "debut", "proclaim", "worldwide", "hike", "required", "confrontation", "colorful", "ideal", "constitution", "trainer", 
"hanksgiving", "scent", "stack", "eyebrow", "sack", "cease", "inherit", "tray", "pioneer", "organizational", "textbook", "nasty", "shrink", "model", "emerging", 
"wheat", "fierce", "envision", "rational", "kingdom", "aisle", "weaken", "protocol", "exclusively", "vocal", "marketplace", "openly", "unfair", "terrain", "deploy", 
"risky", "pasta", "genre", "distract", "merit", "planner", "depressed", "chunk", "closest", "discount", "ladder", "jungle", "migration", "breathing", "invade", 
"hurricane", "retailer", "classify", "wound", "coup", "ambassador", "density", "supportive", "curiosity", "skip", "aggression", "stimulus", "journalism", "robot", "flood", 
"likewise", "informal", "ersian", "feather", "sphere", "tighten", "boast", "perceived", "sole", "publicity", "major", "unfold", "joke", "being", "validity", 
"ecosystem", "strictly", "partial", "collar", "weed", "compliance", "streak", "supposedly", "added", "builder", "glimpse", "premise", "specialty", "deem", "artifact", 
"sneak", "monkey", "mentor", "thirds", "listener", "lightning", "legally", "sleeve", "disappointment", "disturb", "excessive", "tech", "debris", "pile", "logical", 
"liberal", "socially", "parish", "slavery", "blank", "commodity", "cure", "mineral", "hunger", "dying", "developmental", "faster", "spare", "halfway", "cure", 
"equality", "cemetery", "harassment", "deliberately", "fame", "regret", "striking", "likelihood", "carrot", "atop", "toll", "embarrassed", "fucking", "cling", "isolated", 
"blink", "suspicious", "wheelchair", "squad", "eligible", "processor", "plunge", "this", "sponsor", "grin", "color", "demographic", "rain", "chill", "refuge", 
"steer", "legislator", "rally", "programming", "cheer", "outlet", "intact", "vendor", "thrive", "peanut", "chew", "elaborate", "intellectual", "conception", "auction", 
"steak", "comply", "triumph", "shareholder", "comparable", "transport", "conscience", "calculation", "considerably", "interval", "scratch", "awake", "jurisdiction", "inevitably", "feminist", 
"constraint", "emotionally", "expedition", "allegedly", "compromise", "strain", "similarity", "butt", "dumb", "bulk", "sprinkle", "mortality", "philosophical", "conversion", "patron", 
"municipal", "liver", "harmony", "solely", "tolerance", "instant", "goat", "blessing", "banana", "running", "palace", "formerly", "peasant", "neat", "grandparent", 
"lawmaker", "supermarket", "cruise", "mobile", "plain", "part", "calendar", "widow", "deposit", "beard", "brake", "downtown", "screening", "impulse", "forbid", 
"brutal", "predator", "poke", "voluntary", "trouble", "valid", "forum", "dancing", "happily", "soar", "removal", "autonomy", "enact", "round", "thread", 
"light", "landmark", "unhappy", "offender", "coming", "privately", "fraction", "distinctive", "tourism", "threshold", "calm", "routinely", "suite", "remark", "regulator", 
"straw", "theological", "apart", "exhaust", "globe", "fragile", "objection", "chemistry", "fashioned", "crowded", "circle", "blast", "prevail", "overnight", "denial", 
"rental", "fantastic", "fragment", "level", "screw", "warmth", "undergraduate", "liquid", "headache", "policeman", "yield", "projection", "battle", "suitable", "mention", 
"graduation", "drill", "cruel", "mansion", "regard", "grape", "authorize", "cottage", "driveway", "charm", "sexuality", "loyal", "clay", "pound", "balloon", 
"invention", "fare", "homework", "disc", "sofa", "guarantee", "availability", "radar", "frown", "regain", "leave", "permit", "sweater", "rehabilitation", "rubber", 
"retreat", "molecule", "freely", "favorable", "steadily", "veteran", "integrated", "youngster", "broadcast", "premium", "accountability", "overwhelm", "third", "contemplate", "update", 
"spark", "ironically", "fatigue", "beyond", "speculate", "marker", "preach", "bucket", "bomb", "blond", "confession", "provoke", "marble", "substantially", "twist", 
"defender", "fish", "explicit", "transport", "disturbing", "surveillance", "magnetic", "technician", "mutter", "devastating", "depart", "arrow", "trauma", "neighboring", "soak", 
"ribbon", "meantime", "transmit", "screen", "harvest", "consecutive", "republican", "coordinate", "worldwide", "within", "slot", "riot", "nutrient", "citizenship", "severely", 
"sovereignty", "ridge", "brave", "lighting", "specify", "contributor", "frustrate", "crowd", "articulate", "importantly", "transit", "dense", "seminar", "electronics", "sunny", 
"shorts", "swell", "accusation", "soften", "photograph", "straighten", "terribly", "sudden", "bride", "biography", "hazard", "compelling", "seldom", "tile", "economically", 
"honestly", "troubled", "twentieth", "balanced", "foreigner", "launch", "convenience", "delight", "weave", "timber", "till", "accurately", "plea", "bulb", "copy", 
"flying", "sustainable", "devil", "bolt", "cargo", "spine", "seller", "skilled", "managing", "public", "marine", "dock", "organized", "diplomat", "boring", 
"sometime", "summary", "missionary", "epidemic", "fatal", "trim", "warehouse", "accelerate", "butterfly", "bronze", "drown", "inherent", "praise", "nationwide", "spit", 
"harvest", "kneel", "vacuum", "selected", "dictate", "stereotype", "sensor", "laundry", "manual", "pistol", "naval", "plaintiff", "class", "apology"];
var alreadyGuessed = [];

var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);


guessesRemainingFunction();

//keypress function to start things off
  document.onkeypress = function(event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    wordCheck(userGuess);
    drawSpace();
  };

//function for checking the guesses against words, includes what happens for a win or a loss as well as letter verify
function wordCheck(userGuess) {
  if (gameFinished === true) {
    resetFunction();
    return;
  }
 //for statement to check if user guess is a letter
  var letterCheck = false;
  var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (i = 0; i < alphabetArray.length; i++) {
    if (userGuess === alphabetArray[i]) {
      letterCheck = true;
    }
  }
  //if the guess was not a letter, alerts them
  if (letterCheck === false) {
    alert("That was not a letter!");
    return;
  }
  
  var letterMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
      if (userGuess === wordChoice[i]) {
        letterMatch = true;
        playSpace[i] = userGuess;
      }
    }
    var victoryCheck = true;
      for (i = 0; i < wordChoice.length; i++) {
        if (playSpace[i] != wordChoice[i]) {
          victoryCheck = false;
        }
      }
      if (victoryCheck === true) {
        winnerFunction();
        return;
      }
    for (i = 0; i < alreadyGuessed.length; i++) {
      if (userGuess === alreadyGuessed[i]) {
        return;
      }
    }
    if (!letterMatch) {
     guessesRemaining--;
     guessesRemainingFunction();
     alreadyGuessed.push(userGuess);
     alreadyGuessedFunction();
   }
   if (guessesRemaining === 0) {
     loserFunction();
     return;
   }
   console.log (alreadyGuessed.length);
   if (alreadyGuessed.length == 1){
    document.getElementById("miss_0").style.visibility = "hidden";
    document.getElementById("miss_1").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 2){
    document.getElementById("miss_1").style.visibility = "hidden";
    document.getElementById("miss_2").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 3){
    document.getElementById("miss_2").style.visibility = "hidden";
    document.getElementById("miss_3").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 4){
    document.getElementById("miss_3").style.visibility = "hidden";
    document.getElementById("miss_4").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 5){
    document.getElementById("miss_4").style.visibility = "hidden";
    document.getElementById("miss_5").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 6){
    document.getElementById("miss_5").style.visibility = "hidden";
    document.getElementById("miss_6").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 7){
    document.getElementById("miss_6").style.visibility = "hidden";
    document.getElementById("miss_7").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 8){
    document.getElementById("miss_7").style.visibility = "hidden";
    document.getElementById("miss_8").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 9){
    document.getElementById("miss_8").style.visibility = "hidden";
    document.getElementById("miss_9").style.visibility = "visible";
   }
   if (alreadyGuessed.length == 10){
    document.getElementById("miss_9").style.visibility = "hidden";
    document.getElementById("miss_10").style.visibility = "visible";
   }
  }

  function guessesRemainingFunction() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }

  function alreadyGuessedFunction() {
    document.getElementById("already-guessed").innerHTML = alreadyGuessed;
  }

 
  document.getElementById("current-word").innerHTML = playSpace;

//functions for creating underscores and spaces between the underscores
function makeDashes() {
  var underscoreArray = [];
  for (i = 0; i < wordChoice.length; i++) {
    underscoreArray.push("_");
  }
  return underscoreArray;
}

var playSpace = makeDashes();

function drawSpace() {
  for (i = 0; i < playSpace.length; i++) {
    document.getElementById("current-word").innerHTML = playSpace.join(" ");
  }
}

 drawSpace();

//Audio Variables for Win/Lose/Reset functions
 var audio1 = new Audio("./assets/sounds/win1.wav");

 var audio2 = new Audio("./assets/sounds/win2.wav");

 var audio3 = new Audio("./assets/sounds/lose1.wav");


//functions for a win, a loss, and/or a reset
 function winnerFunction() {
     document.getElementById("resultTextChange").innerHTML = "Yeah! You Won!";
     audio1.play();
     audio1.volume = 0.05;
     audio2.play();
     audio1.volume = 0.05;
   wins++;
   winsFunction();
 }

 function winsFunction() {
   document.getElementById("total-wins").innerHTML = wins;
   gameFinished = true;
 }

 function loserFunction() {
   if (guessesRemaining === 0) {
    document.getElementById("miss_11").style.visibility = "visible";
    document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
    audio3.play();
    audio3.volume = 0.05;
    gameFinished = true;
    }
 }

 function resetFunction() {
   document.getElementById("bodyFamily").style.visibility = "visible";
   document.getElementById("miss_0").style.visibility = "visible";
   document.getElementById("miss_1").style.visibility = "hidden";
   document.getElementById("miss_2").style.visibility = "hidden";
   document.getElementById("miss_3").style.visibility = "hidden";
   document.getElementById("miss_4").style.visibility = "hidden";
   document.getElementById("miss_5").style.visibility = "hidden";
   document.getElementById("miss_6").style.visibility = "hidden";
   document.getElementById("miss_7").style.visibility = "hidden";
   document.getElementById("miss_8").style.visibility = "hidden";
   document.getElementById("miss_9").style.visibility = "hidden";
   document.getElementById("miss_10").style.visibility = "hidden";
   document.getElementById("miss_11").style.visibility = "hidden";
   document.getElementById("resultTextChange").innerHTML = "";
   alreadyGuessed.length = 0;
   alreadyGuessedFunction();
   guessesRemaining = 12;
   guessesRemainingFunction();
   wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
   console.log(wordChoice);
   playSpace = makeDashes();
   gameFinished = false;
   audio1.pause();
   audio1.currentTime = 0;
   audio2.pause();
   audio2.currentTime = 0;
   audio3.pause();
   audio3.currentTime = 0;
 }