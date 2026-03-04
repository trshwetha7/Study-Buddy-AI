"""Knowledge base for AI Tutor Atlas backend retrieval."""

LESSON_KNOWLEDGE = [
    {
        "id": "00-map",
        "title": "AI landscape and learning paradigms",
        "track": "Foundations",
        "summary": "Artificial intelligence is the broad field of building systems that behave intelligently. Machine learning is the part of AI where models learn patterns from data. Supervised learning uses labeled examples, unsupervised learning finds structure without labels, and reinforcement learning improves decisions using reward signals over time.",
        "analogy": "A student can learn with answer keys, by sorting similar objects into groups, or by playing a game and learning from points gained or lost.",
        "real_world": "Use this framing before choosing any model. Spam detection is supervised, customer segmentation is unsupervised, and robot control is reinforcement learning.",
        "keywords": ["ai", "machine learning", "supervised", "unsupervised", "reinforcement learning"]
    },
    {
        "id": "01-mle-map",
        "title": "MLE, MAP, and probabilistic estimation",
        "track": "Foundations",
        "summary": "Maximum Likelihood Estimation chooses the parameter values that make the observed data most likely. Maximum A Posteriori estimation adds a prior belief and chooses the parameter values that maximize the posterior probability after combining evidence and prior belief. Many regularized models can be interpreted as MAP estimators.",
        "analogy": "MLE says 'trust only what the data showed me.' MAP says 'use the data, but also keep my prior belief in mind.'",
        "real_world": "MAP is helpful when data is limited and domain knowledge matters, such as medical settings or low-sample business forecasting.",
        "keywords": ["mle", "map", "bayes", "posterior", "prior", "likelihood"]
    },
    {
        "id": "02-splits",
        "title": "Train validation test and leakage",
        "track": "Foundations",
        "summary": "Training data is used to fit model parameters. Validation data is used to tune model choices such as hyperparameters or thresholds. Test data is held back for final evaluation. Data leakage happens when information that would not be available at prediction time accidentally enters model training or selection.",
        "analogy": "Training is class time, validation is a practice exam, and test is the real exam. Seeing the final exam in advance is leakage.",
        "real_world": "Leakage often appears when future data columns, target-derived features, or full-dataset preprocessing are used before splitting the data.",
        "keywords": ["train", "validation", "test", "leakage", "cross validation"]
    },
    {
        "id": "03-linear",
        "title": "Regression and linear regression",
        "track": "Supervised Learning",
        "summary": "Regression predicts continuous values such as price, demand, or time. Linear regression models the prediction as a weighted sum of features plus a bias term. It is simple, interpretable, and often used as the first baseline.",
        "analogy": "It is like drawing the straight trend line that best fits a cloud of points.",
        "real_world": "House-price estimation, revenue forecasting, and delivery-time estimation are common regression problems.",
        "keywords": ["regression", "linear regression", "mse", "continuous target"]
    },
    {
        "id": "04-poly",
        "title": "Polynomial regression",
        "track": "Supervised Learning",
        "summary": "Polynomial regression keeps the model linear in the parameters but expands the features with powers such as x squared or x cubed. This allows the model to fit curved trends without moving to an entirely different algorithm family.",
        "analogy": "If a straight ruler cannot trace the road, you bend the path by adding curve terms.",
        "real_world": "Useful when the relation is smooth and curved, such as growth curves or some physical measurement relationships.",
        "keywords": ["polynomial regression", "feature expansion", "nonlinear trend"]
    },
    {
        "id": "05-ridge-lasso",
        "title": "Ridge and Lasso regularization",
        "track": "Supervised Learning",
        "summary": "Ridge regression adds an L2 penalty that shrinks coefficients smoothly. Lasso adds an L1 penalty that can push some coefficients exactly to zero. Both reduce overfitting by discouraging overly complex fits.",
        "analogy": "Regularization is like telling the model not to overreact to every tiny noise fluctuation in the data.",
        "real_world": "These methods are especially useful when there are many correlated features or when interpretability matters.",
        "keywords": ["ridge", "lasso", "regularization", "l1", "l2"]
    },
    {
        "id": "06-bias-variance",
        "title": "Bias variance underfitting overfitting",
        "track": "Supervised Learning",
        "summary": "High bias means the model is too simple and misses real structure. High variance means the model is too sensitive to the training set and fails to generalize. Underfitting happens when both train and test performance are poor. Overfitting happens when training performance is strong but test performance drops.",
        "analogy": "Underfitting is a student who did not study enough. Overfitting is a student who memorized one answer sheet and fails new questions.",
        "real_world": "The goal of tuning is usually to find the balance where the model captures signal without memorizing noise.",
        "keywords": ["bias", "variance", "underfitting", "overfitting", "generalization"]
    },
    {
        "id": "07-logistic",
        "title": "Logistic regression binary multiclass ordinal",
        "track": "Supervised Learning",
        "summary": "Logistic regression converts a linear score into a probability. In binary classification it uses the sigmoid function. In multiclass classification it commonly uses softmax. Ordered outcomes can be handled with ordinal logistic models that use thresholds over cumulative probabilities.",
        "analogy": "A raw score becomes a confidence number between zero and one, and that confidence drives the class decision.",
        "real_world": "Fraud risk, churn prediction, admission probability, and click-through prediction are common uses.",
        "keywords": ["logistic regression", "sigmoid", "softmax", "binary classification", "multiclass", "ordinal"]
    },
    {
        "id": "08-loss-functions",
        "title": "Loss functions",
        "track": "Supervised Learning",
        "summary": "Loss functions define what type of mistakes matter. Regression often uses MSE, MAE, or Huber loss. Classification often uses cross-entropy or hinge loss. The loss choice affects robustness, calibration, and the geometry of optimization.",
        "analogy": "Loss is the grading rule. Different grading rules reward and punish different mistakes.",
        "real_world": "Choose MAE when large outliers should not dominate, choose cross-entropy when you want probabilistic classification, and choose hinge-style losses for margin-based classification.",
        "keywords": ["loss", "mse", "mae", "cross entropy", "hinge loss"]
    },
    {
        "id": "09-bayes-nb",
        "title": "Bayes theorem and Naive Bayes",
        "track": "Supervised Learning",
        "summary": "Bayes theorem updates beliefs using evidence. Naive Bayes applies Bayes theorem with the simplifying assumption that features are conditionally independent given the class. It is called naive because that assumption is usually not literally true, but it still works surprisingly well in some settings like text classification.",
        "analogy": "You combine many small clues, and each clue votes toward the final label as if it were acting independently.",
        "real_world": "Email spam detection and simple document classification are classic Naive Bayes use cases.",
        "keywords": ["bayes theorem", "naive bayes", "conditional independence", "posterior"]
    },
    {
        "id": "10-svm",
        "title": "Support Vector Machines",
        "track": "Supervised Learning",
        "summary": "Support Vector Machines search for the boundary with the largest possible margin between classes. Soft-margin SVM allows some errors using slack variables. Multiclass extensions are often built with one-vs-rest or one-vs-one strategies.",
        "analogy": "Imagine drawing the dividing line that leaves the largest safety buffer between two groups.",
        "real_world": "SVMs can work well on medium-sized, high-dimensional datasets such as text or bioinformatics features.",
        "keywords": ["svm", "margin", "support vectors", "ovr", "ovo", "one vs rest", "one vs one"]
    },
    {
        "id": "11-parametric-knn",
        "title": "Parametric vs non parametric and kNN",
        "track": "Supervised Learning",
        "summary": "Parametric models summarize learning with a fixed number of parameters, while non-parametric models let complexity grow with data. k-Nearest Neighbors stores training examples and predicts from nearby samples. It is simple but sensitive to scaling and distance choice.",
        "analogy": "Instead of learning one formula, kNN asks nearby past examples for advice.",
        "real_world": "Useful as a baseline, for local similarity tasks, and for illustrating what happens when prediction depends on neighborhoods.",
        "keywords": ["parametric", "non parametric", "knn", "nearest neighbors"]
    },
    {
        "id": "12-trees",
        "title": "Decision trees",
        "track": "Supervised Learning",
        "summary": "Decision trees split the feature space by asking feature-based questions that reduce impurity. They are easy to interpret but can overfit if they grow too deep.",
        "analogy": "A decision tree is a flowchart of yes-or-no questions that ends in a prediction.",
        "real_world": "Credit approval flows and simple rule extraction are intuitive applications of trees.",
        "keywords": ["decision tree", "gini", "entropy", "information gain"]
    },
    {
        "id": "13-rf",
        "title": "Random forest and bagging",
        "track": "Supervised Learning",
        "summary": "Bagging trains many models on bootstrap samples and averages them to reduce variance. Random Forest extends this by also sampling features at each split so trees become less correlated.",
        "analogy": "Ask many slightly different judges and take the group opinion instead of trusting one judge.",
        "real_world": "Random forests are strong tabular-data baselines and often very hard to beat on medium-sized structured datasets.",
        "keywords": ["random forest", "bagging", "bootstrap", "ensemble"]
    },
    {
        "id": "14-xgboost",
        "title": "Boosting and XGBoost",
        "track": "Supervised Learning",
        "summary": "Boosting builds models sequentially, and each new learner focuses on the errors of the previous stage. XGBoost is a highly optimized boosted-tree system with regularization and efficient training for structured data.",
        "analogy": "Each new tutor session focuses on the questions the student got wrong last time.",
        "real_world": "XGBoost remains a strong choice for tabular business datasets such as fraud, churn, ranking, and forecasting.",
        "keywords": ["boosting", "xgboost", "residuals", "ensemble"]
    },
    {
        "id": "15a-unsupervised",
        "title": "Unsupervised learning clustering PCA",
        "track": "Unsupervised Learning",
        "summary": "Unsupervised learning works without labels. Clustering groups similar examples. PCA reduces dimensionality by projecting data into directions that preserve the most variance.",
        "analogy": "It is like sorting a mixed box of objects into piles before anyone tells you their names.",
        "real_world": "Customer segmentation, anomaly exploration, and visualizing high-dimensional data are common uses.",
        "keywords": ["unsupervised", "clustering", "pca", "dimensionality reduction", "kmeans"]
    },
    {
        "id": "15b-rl-core",
        "title": "Reinforcement learning fundamentals",
        "track": "Reinforcement Learning",
        "summary": "An RL agent observes the current state, picks an action, receives a reward, and updates its policy so that future decisions improve long-term return. The core tension is exploration versus exploitation.",
        "analogy": "It is like learning a game by trying moves, earning points, and gradually figuring out what strategy works best.",
        "real_world": "Recommendation systems, robotics, ad bidding, and game-playing agents are common RL examples.",
        "keywords": ["reinforcement learning", "reward", "policy", "return", "exploration", "exploitation"]
    },
    {
        "id": "15-ffnn-backprop",
        "title": "Feedforward networks and backpropagation",
        "track": "Deep Learning",
        "summary": "Feedforward neural networks stack layers of linear transformations and nonlinear activations. Backpropagation computes how much each weight contributed to the final error so the optimizer can update the network efficiently.",
        "analogy": "Information flows forward to make a guess, and error flows backward to explain how to improve each part.",
        "real_world": "This is the foundation under image models, speech models, and language models.",
        "keywords": ["neural network", "backpropagation", "gradient descent", "feedforward"]
    },
    {
        "id": "16-cnn",
        "title": "Convolutional neural networks",
        "track": "Deep Learning",
        "summary": "CNNs use local filters that slide across inputs, sharing weights across space. This makes them efficient for images and other spatial signals.",
        "analogy": "A CNN looks at small patches first, then combines local patterns into larger visual understanding.",
        "real_world": "Image classification, medical imaging, defect detection, and parts of multimodal systems use CNN ideas.",
        "keywords": ["cnn", "convolution", "filter", "pooling", "vision"]
    },
    {
        "id": "17-rnn-lstm-gru",
        "title": "RNN LSTM and GRU",
        "track": "Deep Learning",
        "summary": "RNNs process sequences step by step using a hidden state. LSTM and GRU improve sequence memory with gating mechanisms that help preserve important information over longer contexts.",
        "analogy": "As you read a sentence, you keep some earlier words in memory and drop others. LSTM and GRU make that memory control more reliable.",
        "real_world": "Sequence tagging, time-series signals, and some smaller sequence tasks still use these models.",
        "keywords": ["rnn", "lstm", "gru", "sequence model", "gates"]
    },
    {
        "id": "18-transformer",
        "title": "Transformers encoder decoder BERT GPT",
        "track": "LLM Foundations",
        "summary": "Transformers use self-attention so each token can attend to other relevant tokens. Encoder models such as BERT are strong at understanding tasks, decoder models such as GPT are strong at generation, and encoder-decoder models are strong at sequence-to-sequence tasks.",
        "analogy": "Instead of reading one word in isolation, every word gets to look around the sentence and ask which other words matter most.",
        "real_world": "Modern search assistants, summarizers, copilots, and chat systems are built on transformer ideas.",
        "keywords": ["transformer", "attention", "bert", "gpt", "encoder", "decoder"]
    },
    {
        "id": "19-prompt",
        "title": "Prompt engineering",
        "track": "LLM Foundations",
        "summary": "Prompting is the art of telling the model exactly what role to play, what task to do, what constraints to follow, and what output format to return. Better prompts reduce ambiguity and improve consistency.",
        "analogy": "The clearer the instruction sheet, the better the final assignment submission.",
        "real_world": "Strong prompts help with tutoring, summarization, extraction, classification, and agent workflows.",
        "keywords": ["prompt engineering", "instructions", "format constraints", "examples"]
    },
    {
        "id": "20-finetune",
        "title": "Fine tuning LoRA and QLoRA",
        "track": "LLM Foundations",
        "summary": "Fine-tuning adapts a pretrained model to a task or domain. LoRA reduces cost by learning low-rank updates instead of modifying every weight. QLoRA adds quantization to reduce memory even further while keeping adaptation practical.",
        "analogy": "You are not rebuilding the whole machine. You are attaching a smaller, specialized tuning module.",
        "real_world": "Useful when an organization wants a base model to speak its domain language or follow its task style more consistently.",
        "keywords": ["fine tuning", "lora", "qlora", "peft", "adapters"]
    },
    {
        "id": "21-rag",
        "title": "RAG pipelines",
        "track": "LLM Applications",
        "summary": "RAG means Retrieval-Augmented Generation. The system first retrieves relevant documents and then asks the model to answer using that evidence. This improves factual grounding and freshness.",
        "analogy": "Before answering, the tutor opens the textbook to the right page instead of answering only from memory.",
        "real_world": "Enterprise assistants, policy Q and A, document search bots, and grounded customer support are common RAG uses.",
        "keywords": ["rag", "retrieval augmented generation", "retriever", "vector search", "grounding"]
    },
    {
        "id": "22-agentic",
        "title": "Agentic AI systems",
        "track": "LLM Applications",
        "summary": "Agentic systems do more than reply once. They can plan, call tools, inspect results, and continue until a task is completed. Good agent design requires guardrails, retries, verification, and explicit stop conditions.",
        "analogy": "It is like a smart intern who can search, calculate, and double-check work before replying.",
        "real_world": "Agents are used in workflow automation, coding assistants, research copilots, and task orchestration systems.",
        "keywords": ["agentic ai", "agents", "tools", "planning", "verification"]
    },
    {
        "id": "23-monitoring",
        "title": "Deployment monitoring and model health",
        "track": "MLOps",
        "summary": "After deployment, teams monitor model quality metrics, data drift, concept drift, latency, and failure rates. A model that worked during training can decay when the world changes.",
        "analogy": "A deployed model is like a machine in a factory. You have to keep checking whether it still works safely and accurately.",
        "real_world": "Fraud models, recommendation systems, and forecasting systems all require ongoing monitoring and retraining strategies.",
        "keywords": ["mlops", "monitoring", "drift", "precision", "recall", "latency"]
    },
]
