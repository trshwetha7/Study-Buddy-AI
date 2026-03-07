const REF = {
  cmu601: {
    label: "CMU 10-601 course page",
    url: "https://www.cs.cmu.edu/~ninamf/courses/601sp15/"
  },
  skl_linear: {
    label: "scikit-learn linear models",
    url: "https://scikit-learn.org/stable/modules/linear_model.html"
  },
  skl_cv: {
    label: "scikit-learn cross-validation",
    url: "https://scikit-learn.org/stable/modules/cross_validation.html"
  },
  skl_pitfalls: {
    label: "scikit-learn common pitfalls",
    url: "https://scikit-learn.org/stable/common_pitfalls.html"
  },
  skl_svm: {
    label: "scikit-learn SVM",
    url: "https://scikit-learn.org/stable/modules/svm.html"
  },
  skl_multi: {
    label: "scikit-learn multiclass strategies",
    url: "https://scikit-learn.org/stable/modules/multiclass.html"
  },
  skl_nb: {
    label: "scikit-learn Naive Bayes",
    url: "https://scikit-learn.org/stable/modules/naive_bayes.html"
  },
  skl_neighbors: {
    label: "scikit-learn nearest neighbors",
    url: "https://scikit-learn.org/stable/modules/neighbors.html"
  },
  skl_tree: {
    label: "scikit-learn decision trees",
    url: "https://scikit-learn.org/stable/modules/tree.html"
  },
  skl_ensemble: {
    label: "scikit-learn ensembles",
    url: "https://scikit-learn.org/stable/modules/ensemble.html"
  },
  xgboost: {
    label: "XGBoost documentation",
    url: "https://xgboost.readthedocs.io/en/stable/"
  },
  skl_metrics: {
    label: "scikit-learn model metrics",
    url: "https://scikit-learn.org/stable/modules/model_evaluation.html"
  },
  p_attention: {
    label: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762"
  },
  p_bert: {
    label: "BERT paper",
    url: "https://arxiv.org/abs/1810.04805"
  },
  p_gpt3: {
    label: "GPT-3 paper",
    url: "https://arxiv.org/abs/2005.14165"
  },
  p_lora: {
    label: "LoRA paper",
    url: "https://arxiv.org/abs/2106.09685"
  },
  p_qlora: {
    label: "QLoRA paper",
    url: "https://arxiv.org/abs/2305.14314"
  },
  p_rag: {
    label: "RAG paper",
    url: "https://arxiv.org/abs/2005.11401"
  },
  p_react: {
    label: "ReAct paper",
    url: "https://arxiv.org/abs/2210.03629"
  },
  rl_book: {
    label: "Sutton and Barto RL book",
    url: "http://incompleteideas.net/book/the-book-2nd.html"
  }
};

const IMG = {
  biasVariance: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Variance-bias.svg",
    label: "Bias-variance plot (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Variance-bias.svg"
  },
  linearRegression: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Linear_regression.svg",
    label: "Linear regression plot (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Linear_regression.svg"
  },
  logisticCurve: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Logistic-curve.svg",
    label: "Logistic curve (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Logistic-curve.svg"
  },
  bayes: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bayes_theorem_visualisation.svg/800px-Bayes_theorem_visualisation.svg.png",
    label: "Bayes theorem visualization (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Bayes_theorem_visualisation.svg"
  },
  svm: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Svm_separating_hyperplanes_(SVG).svg",
    label: "SVM separating hyperplanes (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Svm_separating_hyperplanes_(SVG).svg"
  },
  knn: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/KnnClassification.svg",
    label: "kNN classification visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:KnnClassification.svg"
  },
  tree: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/ID3_algorithm_decision_tree.svg",
    label: "Decision tree visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:ID3_algorithm_decision_tree.svg"
  },
  ffnn: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Multilayer_Neural_Network.svg",
    label: "Multilayer neural network (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Multilayer_Neural_Network.svg"
  },
  cnn: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Convolutional_Network_(vector).svg",
    label: "CNN architecture visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Convolutional_Network_(vector).svg"
  },
  rnn: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Recurrent_neural_network_unfold.svg",
    label: "RNN unfold visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Recurrent_neural_network_unfold.svg"
  },
  lstm: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_LSTM_Cell.svg",
    label: "LSTM cell visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:The_LSTM_Cell.svg"
  },
  gru: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/GRU,_base_type_3.svg",
    label: "GRU cell visual (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:GRU,_base_type_3.svg"
  },
  transformer: {
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Transformer%2C_full_architecture.png",
    label: "Transformer full architecture (Wikimedia Commons)",
    source: "https://commons.wikimedia.org/wiki/File:Transformer,_full_architecture.png"
  }
};

function visualFrame(title, subtitle, inner) {
  return `<svg viewBox="0 0 900 320" role="img" aria-label="${title}">
    <defs>
      <linearGradient id="visualBg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f3fbfc" />
        <stop offset="100%" stop-color="#fff7ed" />
      </linearGradient>
      <linearGradient id="tealFlow" x1="0" x2="1">
        <stop offset="0%" stop-color="#1aa7ad" />
        <stop offset="100%" stop-color="#77d0d4" />
      </linearGradient>
      <linearGradient id="warmFlow" x1="0" x2="1">
        <stop offset="0%" stop-color="#f59a58" />
        <stop offset="100%" stop-color="#ffd59f" />
      </linearGradient>
      <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5.2" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 z" fill="#31465f" />
      </marker>
    </defs>
    <rect x="18" y="18" width="864" height="284" rx="24" fill="url(#visualBg)" stroke="#d9e6f2" />
    <text x="42" y="60" fill="#18324a" font-size="26" font-family="Baloo 2" font-weight="700">${title}</text>
    <text x="42" y="88" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700">${subtitle}</text>
    ${inner}
  </svg>`;
}

const GENERATED_VISUALS = {
  "00-map": () =>
    visualFrame(
      "Learning paradigms",
      "Three common ways a machine can learn from experience.",
      `
      <rect x="70" y="128" width="200" height="110" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="350" y="90" width="200" height="80" rx="18" fill="#e8f8f8" stroke="#8ccfd3" />
      <rect x="350" y="188" width="200" height="80" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <rect x="630" y="128" width="200" height="110" rx="18" fill="#ffe4cf" stroke="#f0c18e" />
      <text x="128" y="190" fill="#214153" font-size="24" font-family="Nunito" font-weight="800">AI</text>
      <text x="388" y="136" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">Supervised</text>
      <text x="378" y="235" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">Unsupervised</text>
      <text x="664" y="190" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">Reinforcement</text>
      <line x1="270" y1="182" x2="350" y2="130" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="270" y1="184" x2="350" y2="228" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="550" y1="182" x2="630" y2="182" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      `
    ),
  "01-mle-map": () =>
    visualFrame(
      "MLE and MAP",
      "MAP adds prior belief to the likelihood signal.",
      `
      <rect x="70" y="126" width="180" height="96" rx="16" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="310" y="126" width="180" height="96" rx="16" fill="#fff0df" stroke="#f0c18e" />
      <rect x="550" y="110" width="250" height="126" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <text x="122" y="180" fill="#214153" font-size="22" font-family="Nunito" font-weight="800">Likelihood</text>
      <text x="366" y="180" fill="#84522b" font-size="22" font-family="Nunito" font-weight="800">Prior</text>
      <text x="634" y="166" fill="#24415a" font-size="26" font-family="Nunito" font-weight="800">Posterior</text>
      <text x="618" y="198" fill="#5f6d82" font-size="16" font-family="Nunito">data evidence + belief</text>
      <line x1="250" y1="174" x2="310" y2="174" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="490" y1="174" x2="550" y2="174" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      `
    ),
  "02-splits": () =>
    visualFrame(
      "Train, validation, test",
      "Teach, tune, then report the final exam score once.",
      `
      <rect x="68" y="118" width="210" height="118" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="346" y="118" width="210" height="118" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <rect x="624" y="118" width="210" height="118" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <text x="140" y="158" fill="#214153" font-size="26" font-family="Nunito" font-weight="800">Train</text>
      <text x="120" y="192" fill="#4f6279" font-size="18" font-family="Nunito">fit the model</text>
      <text x="392" y="158" fill="#84522b" font-size="26" font-family="Nunito" font-weight="800">Validation</text>
      <text x="383" y="192" fill="#6e5f4d" font-size="18" font-family="Nunito">tune and compare</text>
      <text x="701" y="158" fill="#3c5270" font-size="26" font-family="Nunito" font-weight="800">Test</text>
      <text x="667" y="192" fill="#4f6279" font-size="18" font-family="Nunito">final report only</text>
      `
    ),
  "03-linear": () =>
    visualFrame(
      "Linear regression",
      "A straight line summarizes the trend in continuous data.",
      `
      <line x1="108" y1="246" x2="810" y2="246" stroke="#587089" stroke-width="4" />
      <line x1="108" y1="246" x2="108" y2="114" stroke="#587089" stroke-width="4" />
      <line x1="144" y1="222" x2="748" y2="138" stroke="#8d1013" stroke-width="7" />
      <circle cx="166" cy="214" r="7" fill="#1b7fa0" />
      <circle cx="214" cy="196" r="7" fill="#1b7fa0" />
      <circle cx="252" cy="184" r="7" fill="#1b7fa0" />
      <circle cx="314" cy="182" r="7" fill="#1b7fa0" />
      <circle cx="366" cy="162" r="7" fill="#1b7fa0" />
      <circle cx="434" cy="162" r="7" fill="#1b7fa0" />
      <circle cx="494" cy="150" r="7" fill="#1b7fa0" />
      <circle cx="576" cy="148" r="7" fill="#1b7fa0" />
      <circle cx="648" cy="136" r="7" fill="#1b7fa0" />
      <circle cx="726" cy="124" r="7" fill="#1b7fa0" />
      <text x="620" y="194" fill="#8d1013" font-size="17" font-family="Nunito" font-weight="800">best-fit line</text>
      <text x="470" y="286" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" text-anchor="middle">feature x</text>
      <text x="44" y="180" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" transform="rotate(-90 44 180)">target y</text>
      `
    ),
  "04-poly": () =>
    visualFrame(
      "Polynomial regression",
      "The fit can curve while remaining linear in the coefficients.",
      `
      <line x1="108" y1="246" x2="810" y2="246" stroke="#587089" stroke-width="4" />
      <line x1="108" y1="246" x2="108" y2="114" stroke="#587089" stroke-width="4" />
      <path d="M136 220 C226 90, 302 96, 370 170 S534 210, 754 132" fill="none" stroke="url(#tealFlow)" stroke-width="8" />
      <circle cx="158" cy="214" r="7" fill="#f59a58" />
      <circle cx="204" cy="132" r="7" fill="#f59a58" />
      <circle cx="286" cy="110" r="7" fill="#f59a58" />
      <circle cx="348" cy="168" r="7" fill="#f59a58" />
      <circle cx="440" cy="202" r="7" fill="#f59a58" />
      <circle cx="572" cy="178" r="7" fill="#f59a58" />
      <circle cx="714" cy="132" r="7" fill="#f59a58" />
      <text x="470" y="286" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" text-anchor="middle">feature x</text>
      <text x="44" y="180" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" transform="rotate(-90 44 180)">target y</text>
      `
    ),
  "05-ridge-lasso": () =>
    visualFrame(
      "Regularization geometry",
      "Ridge shrinks smoothly. Lasso prefers corners and sparsity.",
      `
      <rect x="76" y="122" width="320" height="126" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="504" y="122" width="320" height="126" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <ellipse cx="236" cy="186" rx="82" ry="56" fill="none" stroke="#1aa7ad" stroke-width="5" />
      <ellipse cx="236" cy="186" rx="42" ry="28" fill="none" stroke="#1aa7ad" stroke-width="5" />
      <path d="M606 186 L664 128 L722 186 L664 244 Z" fill="none" stroke="#f59a58" stroke-width="5" />
      <path d="M626 186 L664 148 L702 186 L664 224 Z" fill="none" stroke="#f59a58" stroke-width="5" />
      <text x="236" y="238" text-anchor="middle" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">Ridge (L2)</text>
      <text x="664" y="238" text-anchor="middle" fill="#84522b" font-size="18" font-family="Nunito" font-weight="800">Lasso (L1)</text>
      `
    ),
  "06-bias-variance": () =>
    visualFrame(
      "Bias-variance tradeoff",
      "Training error falls with complexity, but test error bends back up.",
      `
      <line x1="108" y1="240" x2="800" y2="240" stroke="#587089" stroke-width="4" />
      <line x1="108" y1="240" x2="108" y2="110" stroke="#587089" stroke-width="4" />
      <path d="M132 138 C254 152, 404 184, 776 220" fill="none" stroke="#1aa7ad" stroke-width="7" />
      <path d="M132 210 C252 142, 410 114, 548 132 S712 188, 776 218" fill="none" stroke="#f59a58" stroke-width="7" />
      <text x="644" y="160" fill="#f59a58" font-size="17" font-family="Nunito" font-weight="800">test error</text>
      <text x="604" y="226" fill="#1aa7ad" font-size="17" font-family="Nunito" font-weight="800">train error</text>
      <text x="460" y="286" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" text-anchor="middle">model complexity</text>
      <text x="44" y="176" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" transform="rotate(-90 44 176)">error</text>
      `
    ),
  "07-logistic": () =>
    visualFrame(
      "Logistic regression",
      "A linear score passes through a sigmoid to become a probability.",
      `
      <line x1="108" y1="244" x2="800" y2="244" stroke="#587089" stroke-width="4" />
      <line x1="108" y1="244" x2="108" y2="100" stroke="#587089" stroke-width="4" />
      <path d="M136 226 C228 224, 302 214, 356 188 S478 112, 566 104 S712 118, 772 122" fill="none" stroke="url(#tealFlow)" stroke-width="8" />
      <line x1="108" y1="172" x2="800" y2="172" stroke="#f59a58" stroke-width="4" stroke-dasharray="10 10" />
      <text x="644" y="160" fill="#84522b" font-size="17" font-family="Nunito" font-weight="800">0.5 threshold</text>
      <text x="460" y="286" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" text-anchor="middle">linear score z</text>
      <text x="46" y="176" fill="#5f6d82" font-size="15" font-family="Nunito" font-weight="700" transform="rotate(-90 46 176)">probability</text>
      `
    ),
  "08-loss-functions": () =>
    visualFrame(
      "Loss functions",
      "The loss decides which mistakes the model should care about most.",
      `
      <rect x="72" y="120" width="350" height="128" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="478" y="120" width="350" height="128" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <path d="M134 222 Q246 124 360 222" fill="none" stroke="#1aa7ad" stroke-width="7" />
      <rect x="556" y="168" width="34" height="44" rx="8" fill="#f59a58" />
      <rect x="608" y="152" width="34" height="60" rx="8" fill="#f8b276" />
      <rect x="660" y="138" width="34" height="74" rx="8" fill="#fbd0a8" />
      <text x="182" y="154" fill="#214153" font-size="22" font-family="Nunito" font-weight="800">Regression</text>
      <text x="586" y="154" fill="#84522b" font-size="22" font-family="Nunito" font-weight="800">Classification</text>
      `
    ),
  "09-bayes-nb": () =>
    visualFrame(
      "Naive Bayes",
      "Independent feature clues are multiplied into one class belief.",
      `
      <rect x="70" y="132" width="110" height="56" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="70" y="198" width="110" height="56" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="220" y="165" width="170" height="74" rx="16" fill="#fff0df" stroke="#f0c18e" />
      <rect x="462" y="128" width="140" height="60" rx="14" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="462" y="202" width="140" height="60" rx="14" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="674" y="164" width="130" height="80" rx="18" fill="#eaf8f8" stroke="#8ccfd3" />
      <text x="98" y="166" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">word 1</text>
      <text x="98" y="232" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">word 2</text>
      <text x="248" y="208" fill="#84522b" font-size="18" font-family="Nunito" font-weight="800">independent features</text>
      <text x="500" y="166" fill="#3c5270" font-size="18" font-family="Nunito" font-weight="800">Class A</text>
      <text x="500" y="240" fill="#3c5270" font-size="18" font-family="Nunito" font-weight="800">Class B</text>
      <text x="708" y="212" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">pick max</text>
      <line x1="180" y1="160" x2="214" y2="184" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="180" y1="226" x2="214" y2="212" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="390" y1="202" x2="456" y2="162" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="390" y1="202" x2="456" y2="228" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="602" y1="158" x2="668" y2="192" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="602" y1="232" x2="668" y2="214" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      `
    ),
  "10-svm": () =>
    visualFrame(
      "Support Vector Machine",
      "The classifier chooses the separator with the widest safe margin.",
      `
      <rect x="98" y="108" width="690" height="148" rx="18" fill="#ffffff" stroke="#d9e6f2" />
      <line x1="220" y1="230" x2="626" y2="116" stroke="#1f2f46" stroke-width="6" />
      <line x1="194" y1="244" x2="600" y2="130" stroke="#7ccbd1" stroke-width="4" stroke-dasharray="10 8" />
      <line x1="246" y1="216" x2="652" y2="102" stroke="#7ccbd1" stroke-width="4" stroke-dasharray="10 8" />
      <circle cx="266" cy="216" r="8" fill="#1aa7ad" />
      <circle cx="324" cy="200" r="8" fill="#1aa7ad" />
      <circle cx="382" cy="184" r="8" fill="#1aa7ad" />
      <circle cx="542" cy="180" r="8" fill="#f59a58" />
      <circle cx="610" cy="164" r="8" fill="#f59a58" />
      <circle cx="668" cy="148" r="8" fill="#f59a58" />
      <text x="618" y="228" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">max margin</text>
      `
    ),
  "11-parametric-knn": () =>
    visualFrame(
      "Parametric vs kNN",
      "A compact formula on one side, local neighbors on the other.",
      `
      <rect x="72" y="118" width="320" height="138" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="508" y="118" width="320" height="138" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <text x="150" y="166" fill="#3c5270" font-size="24" font-family="Nunito" font-weight="800">fixed formula</text>
      <text x="150" y="204" fill="#5f6d82" font-size="18" font-family="Nunito">small set of learned weights</text>
      <circle cx="614" cy="178" r="56" fill="none" stroke="#f59a58" stroke-width="5" />
      <circle cx="602" cy="166" r="8" fill="#1aa7ad" />
      <circle cx="650" cy="186" r="8" fill="#1aa7ad" />
      <circle cx="626" cy="214" r="8" fill="#1aa7ad" />
      <circle cx="670" cy="154" r="8" fill="#f59a58" />
      <circle cx="594" cy="206" r="8" fill="#f59a58" />
      <circle cx="614" cy="178" r="11" fill="#1f2f46" />
      `
    ),
  "12-trees": () =>
    visualFrame(
      "Decision tree",
      "A sequence of yes or no questions narrows the answer path.",
      `
      <circle cx="450" cy="116" r="24" fill="#1aa7ad" />
      <circle cx="312" cy="182" r="22" fill="#7ccbd1" />
      <circle cx="588" cy="182" r="22" fill="#7ccbd1" />
      <rect x="206" y="236" width="110" height="42" rx="14" fill="#fff0df" stroke="#f0c18e" />
      <rect x="372" y="236" width="110" height="42" rx="14" fill="#fff0df" stroke="#f0c18e" />
      <rect x="538" y="236" width="110" height="42" rx="14" fill="#fff0df" stroke="#f0c18e" />
      <rect x="704" y="236" width="110" height="42" rx="14" fill="#fff0df" stroke="#f0c18e" />
      <line x1="450" y1="140" x2="312" y2="160" stroke="#31465f" stroke-width="5" />
      <line x1="450" y1="140" x2="588" y2="160" stroke="#31465f" stroke-width="5" />
      <line x1="312" y1="204" x2="260" y2="236" stroke="#31465f" stroke-width="5" />
      <line x1="312" y1="204" x2="426" y2="236" stroke="#31465f" stroke-width="5" />
      <line x1="588" y1="204" x2="592" y2="236" stroke="#31465f" stroke-width="5" />
      <line x1="588" y1="204" x2="758" y2="236" stroke="#31465f" stroke-width="5" />
      `
    ),
  "13-rf": () =>
    visualFrame(
      "Random forest",
      "Many slightly different trees vote together for a steadier answer.",
      `
      <rect x="706" y="124" width="116" height="92" rx="16" fill="#fff0df" stroke="#f0c18e" />
      <text x="764" y="178" text-anchor="middle" fill="#84522b" font-size="22" font-family="Nunito" font-weight="800">vote</text>
      <g stroke="#31465f" stroke-width="4" fill="none" stroke-linecap="round">
        <line x1="128" y1="212" x2="128" y2="166" />
        <line x1="128" y1="166" x2="108" y2="142" />
        <line x1="128" y1="166" x2="148" y2="142" />
        <line x1="128" y1="186" x2="112" y2="168" />
        <line x1="128" y1="186" x2="144" y2="168" />
        <line x1="270" y1="212" x2="270" y2="160" />
        <line x1="270" y1="160" x2="248" y2="136" />
        <line x1="270" y1="160" x2="292" y2="136" />
        <line x1="270" y1="182" x2="252" y2="162" />
        <line x1="270" y1="182" x2="288" y2="162" />
        <line x1="412" y1="212" x2="412" y2="170" />
        <line x1="412" y1="170" x2="390" y2="146" />
        <line x1="412" y1="170" x2="434" y2="146" />
        <line x1="412" y1="192" x2="394" y2="174" />
        <line x1="412" y1="192" x2="430" y2="174" />
        <line x1="554" y1="212" x2="554" y2="162" />
        <line x1="554" y1="162" x2="532" y2="138" />
        <line x1="554" y1="162" x2="576" y2="138" />
        <line x1="554" y1="184" x2="536" y2="164" />
        <line x1="554" y1="184" x2="572" y2="164" />
      </g>
      <text x="128" y="242" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">tree 1</text>
      <text x="270" y="242" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">tree 2</text>
      <text x="412" y="242" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">tree 3</text>
      <text x="554" y="242" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">tree 4</text>
      <line x1="156" y1="182" x2="706" y2="170" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="298" y1="176" x2="706" y2="170" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="440" y1="186" x2="706" y2="170" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="582" y1="178" x2="706" y2="170" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      `
    ),
  "14-xgboost": () =>
    visualFrame(
      "Boosting",
      "Each learner focuses on the mistakes left by the previous one.",
      `
      <rect x="100" y="144" width="100" height="72" rx="14" fill="#ffe4cf" stroke="#f0c18e" />
      <rect x="270" y="132" width="100" height="84" rx="14" fill="#ffd8bb" stroke="#f0c18e" />
      <rect x="440" y="120" width="100" height="96" rx="14" fill="#ffc79d" stroke="#f0c18e" />
      <rect x="610" y="108" width="100" height="108" rx="14" fill="#ffb27d" stroke="#f0c18e" />
      <rect x="744" y="132" width="90" height="84" rx="16" fill="#eef7ff" stroke="#bfd2ef" />
      <line x1="200" y1="180" x2="264" y2="174" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="370" y1="174" x2="434" y2="168" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="540" y1="168" x2="604" y2="162" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="710" y1="162" x2="740" y2="174" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      `
    ),
  "15-ffnn-backprop": () =>
    visualFrame(
      "Feedforward and backprop",
      "Signals move forward for prediction and gradients move backward to learn.",
      `
      <circle cx="180" cy="132" r="18" fill="#1aa7ad" />
      <circle cx="180" cy="192" r="18" fill="#1aa7ad" />
      <circle cx="348" cy="102" r="18" fill="#7ccbd1" />
      <circle cx="348" cy="162" r="18" fill="#7ccbd1" />
      <circle cx="348" cy="222" r="18" fill="#7ccbd1" />
      <circle cx="520" cy="132" r="18" fill="#f8b276" />
      <circle cx="520" cy="192" r="18" fill="#f8b276" />
      <circle cx="692" cy="162" r="20" fill="#1f2f46" />
      <line x1="198" y1="132" x2="330" y2="102" stroke="#31465f" stroke-width="3" />
      <line x1="198" y1="132" x2="330" y2="162" stroke="#31465f" stroke-width="3" />
      <line x1="198" y1="192" x2="330" y2="162" stroke="#31465f" stroke-width="3" />
      <line x1="198" y1="192" x2="330" y2="222" stroke="#31465f" stroke-width="3" />
      <line x1="366" y1="102" x2="502" y2="132" stroke="#31465f" stroke-width="3" />
      <line x1="366" y1="162" x2="502" y2="132" stroke="#31465f" stroke-width="3" />
      <line x1="366" y1="162" x2="502" y2="192" stroke="#31465f" stroke-width="3" />
      <line x1="366" y1="222" x2="502" y2="192" stroke="#31465f" stroke-width="3" />
      <line x1="538" y1="132" x2="672" y2="162" stroke="#31465f" stroke-width="3" />
      <line x1="538" y1="192" x2="672" y2="162" stroke="#31465f" stroke-width="3" />
      <path d="M662 228 C560 256, 420 256, 220 226" fill="none" stroke="#f59a58" stroke-width="6" marker-end="url(#arrowHead)" />
      `
    ),
  "16-cnn": () =>
    visualFrame(
      "CNN",
      "Filters scan local patterns and build richer feature maps layer by layer.",
      `
      <rect x="94" y="114" width="110" height="110" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="274" y="128" width="82" height="82" rx="12" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="408" y="112" width="90" height="110" rx="12" fill="#fff0df" stroke="#f0c18e" />
      <rect x="538" y="100" width="72" height="122" rx="12" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="676" y="130" width="122" height="74" rx="14" fill="#ffe4cf" stroke="#f0c18e" />
      <text x="118" y="244" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">image</text>
      <text x="282" y="244" fill="#3c5270" font-size="18" font-family="Nunito" font-weight="800">filter</text>
      <text x="406" y="244" fill="#84522b" font-size="18" font-family="Nunito" font-weight="800">feature map</text>
      <text x="538" y="244" fill="#3c5270" font-size="18" font-family="Nunito" font-weight="800">pool</text>
      <text x="700" y="244" fill="#84522b" font-size="18" font-family="Nunito" font-weight="800">classifier</text>
      <line x1="204" y1="168" x2="274" y2="168" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="356" y1="168" x2="408" y2="168" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="498" y1="168" x2="538" y2="168" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="610" y1="168" x2="676" y2="168" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      `
    ),
  "17-rnn-lstm-gru": () =>
    visualFrame(
      "RNN, LSTM, GRU",
      "A hidden state carries memory from one time step to the next.",
      `
      <rect x="124" y="168" width="100" height="62" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="294" y="168" width="100" height="62" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="464" y="168" width="100" height="62" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="634" y="168" width="100" height="62" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <circle cx="174" cy="120" r="18" fill="#f8b276" />
      <circle cx="344" cy="120" r="18" fill="#f8b276" />
      <circle cx="514" cy="120" r="18" fill="#f8b276" />
      <circle cx="684" cy="120" r="18" fill="#f8b276" />
      <line x1="224" y1="199" x2="290" y2="199" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="394" y1="199" x2="460" y2="199" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="564" y1="199" x2="630" y2="199" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="174" y1="138" x2="338" y2="138" stroke="#f59a58" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="344" y1="138" x2="508" y2="138" stroke="#f59a58" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <line x1="514" y1="138" x2="678" y2="138" stroke="#f59a58" stroke-width="3.5" marker-end="url(#arrowHead)" />
      <text x="158" y="206" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">t1</text>
      <text x="328" y="206" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">t2</text>
      <text x="498" y="206" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">t3</text>
      <text x="668" y="206" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">t4</text>
      <text x="110" y="124" fill="#84522b" font-size="16" font-family="Nunito" font-weight="700">hidden state</text>
      `
    ),
  "18-transformer": () =>
    visualFrame(
      "Transformer",
      "Attention lets each token look at other relevant tokens directly.",
      `
      <rect x="100" y="182" width="84" height="54" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="220" y="182" width="84" height="54" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="340" y="182" width="84" height="54" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="460" y="182" width="84" height="54" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="580" y="182" width="84" height="54" rx="14" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="300" y="102" width="190" height="48" rx="16" fill="#fff0df" stroke="#f0c18e" />
      <rect x="724" y="158" width="112" height="82" rx="16" fill="#eef7ff" stroke="#bfd2ef" />
      <text x="396" y="132" text-anchor="middle" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">self-attention</text>
      <text x="780" y="206" text-anchor="middle" fill="#3c5270" font-size="18" font-family="Nunito" font-weight="800">context</text>
      <text x="132" y="214" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">t1</text>
      <text x="252" y="214" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">t2</text>
      <text x="372" y="214" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">t3</text>
      <text x="492" y="214" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">t4</text>
      <text x="612" y="214" text-anchor="middle" fill="#214153" font-size="16" font-family="Nunito" font-weight="800">t5</text>
      <line x1="142" y1="182" x2="352" y2="150" stroke="#f59a58" stroke-width="3.5" />
      <line x1="262" y1="182" x2="384" y2="150" stroke="#f59a58" stroke-width="3.5" />
      <line x1="382" y1="182" x2="396" y2="150" stroke="#f59a58" stroke-width="3.5" />
      <line x1="502" y1="182" x2="408" y2="150" stroke="#f59a58" stroke-width="3.5" />
      <line x1="622" y1="182" x2="440" y2="150" stroke="#f59a58" stroke-width="3.5" />
      <line x1="490" y1="126" x2="724" y2="184" stroke="#31465f" stroke-width="3.5" marker-end="url(#arrowHead)" />
      `
    ),
  "19-prompt": () =>
    visualFrame(
      "Prompt engineering",
      "Good prompts specify role, task, context, and output shape.",
      `
      <rect x="98" y="132" width="150" height="92" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="302" y="132" width="150" height="92" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="506" y="132" width="150" height="92" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <rect x="710" y="144" width="118" height="68" rx="18" fill="#eaf8f8" stroke="#8ccfd3" />
      <text x="152" y="186" fill="#3c5270" font-size="20" font-family="Nunito" font-weight="800">Role</text>
      <text x="336" y="186" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">Context</text>
      <text x="560" y="186" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">Task</text>
      <text x="740" y="186" fill="#214153" font-size="18" font-family="Nunito" font-weight="800">Output</text>
      <line x1="248" y1="178" x2="302" y2="178" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="452" y1="178" x2="506" y2="178" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="656" y1="178" x2="710" y2="178" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      `
    ),
  "20-finetune": () =>
    visualFrame(
      "Fine-tuning, LoRA, QLoRA",
      "Keep most base weights fixed and learn small adapter updates.",
      `
      <rect x="102" y="120" width="188" height="126" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="356" y="120" width="188" height="126" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="610" y="120" width="188" height="126" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <text x="152" y="176" fill="#3c5270" font-size="22" font-family="Nunito" font-weight="800">base model</text>
      <text x="408" y="164" fill="#214153" font-size="22" font-family="Nunito" font-weight="800">small adapters</text>
      <text x="644" y="176" fill="#84522b" font-size="22" font-family="Nunito" font-weight="800">task tuned</text>
      <rect x="404" y="182" width="92" height="18" rx="9" fill="#1aa7ad" />
      <rect x="404" y="208" width="92" height="18" rx="9" fill="#f59a58" />
      <line x1="290" y1="183" x2="350" y2="183" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="544" y1="183" x2="604" y2="183" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      `
    ),
  "21-rag": () =>
    visualFrame(
      "RAG pipeline",
      "Retrieve useful context first, then generate the answer with grounded evidence.",
      `
      <rect x="70" y="130" width="128" height="86" rx="16" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="272" y="116" width="146" height="114" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="492" y="116" width="146" height="114" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <rect x="712" y="130" width="120" height="86" rx="16" fill="#eaf8f8" stroke="#8ccfd3" />
      <text x="102" y="182" fill="#3c5270" font-size="20" font-family="Nunito" font-weight="800">query</text>
      <text x="300" y="182" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">retrieve docs</text>
      <text x="536" y="182" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">add context</text>
      <text x="740" y="182" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">answer</text>
      <line x1="198" y1="174" x2="272" y2="174" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="418" y1="174" x2="492" y2="174" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      <line x1="638" y1="174" x2="712" y2="174" stroke="#31465f" stroke-width="5" marker-end="url(#arrowHead)" />
      `
    ),
  "22-agentic": () =>
    visualFrame(
      "Agentic loop",
      "Plan, act, observe, then update the next step from feedback.",
      `
      <circle cx="262" cy="172" r="52" fill="#eef7ff" stroke="#bfd2ef" stroke-width="5" />
      <circle cx="450" cy="118" r="52" fill="#dff2f4" stroke="#8ccfd3" stroke-width="5" />
      <circle cx="638" cy="172" r="52" fill="#fff0df" stroke="#f0c18e" stroke-width="5" />
      <circle cx="450" cy="226" r="52" fill="#eaf8f8" stroke="#8ccfd3" stroke-width="5" />
      <text x="232" y="178" fill="#3c5270" font-size="20" font-family="Nunito" font-weight="800">plan</text>
      <text x="428" y="124" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">act</text>
      <text x="598" y="178" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">observe</text>
      <text x="412" y="232" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">revise</text>
      <path d="M316 150 C350 128, 392 120, 414 120" fill="none" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <path d="M488 120 C534 122, 570 136, 598 156" fill="none" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <path d="M612 204 C572 222, 526 230, 486 228" fill="none" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <path d="M418 228 C372 222, 330 206, 296 192" fill="none" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      `
    ),
  "23-monitoring": () =>
    visualFrame(
      "Monitoring after deployment",
      "Track drift, latency, accuracy, and alert when behavior changes.",
      `
      <rect x="90" y="126" width="210" height="114" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="344" y="126" width="210" height="114" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="598" y="126" width="210" height="114" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <path d="M120 208 L158 184 L190 192 L224 160 L266 154" fill="none" stroke="#3c5270" stroke-width="6" />
      <rect x="380" y="168" width="26" height="40" rx="6" fill="#1aa7ad" />
      <rect x="418" y="146" width="26" height="62" rx="6" fill="#57bcc1" />
      <rect x="456" y="130" width="26" height="78" rx="6" fill="#8cd7da" />
      <circle cx="642" cy="176" r="24" fill="#f59a58" />
      <line x1="674" y1="176" x2="748" y2="176" stroke="#f59a58" stroke-width="8" stroke-linecap="round" />
      <text x="120" y="158" fill="#3c5270" font-size="20" font-family="Nunito" font-weight="800">drift</text>
      <text x="394" y="158" fill="#214153" font-size="20" font-family="Nunito" font-weight="800">latency</text>
      <text x="640" y="158" fill="#84522b" font-size="20" font-family="Nunito" font-weight="800">alerts</text>
      `
    ),
  "15a-unsupervised": () =>
    visualFrame(
      "Clustering and PCA",
      "Cluster nearby points, then project them onto simpler summary directions.",
      `
      <circle cx="176" cy="166" r="10" fill="#1aa7ad" />
      <circle cx="208" cy="148" r="10" fill="#1aa7ad" />
      <circle cx="218" cy="188" r="10" fill="#1aa7ad" />
      <circle cx="320" cy="126" r="10" fill="#f59a58" />
      <circle cx="352" cy="112" r="10" fill="#f59a58" />
      <circle cx="360" cy="152" r="10" fill="#f59a58" />
      <circle cx="286" cy="226" r="10" fill="#7c95ff" />
      <circle cx="324" cy="214" r="10" fill="#7c95ff" />
      <circle cx="348" cy="248" r="10" fill="#7c95ff" />
      <line x1="442" y1="226" x2="760" y2="126" stroke="#31465f" stroke-width="6" marker-end="url(#arrowHead)" />
      <circle cx="522" cy="204" r="8" fill="#1aa7ad" />
      <circle cx="574" cy="188" r="8" fill="#f59a58" />
      <circle cx="626" cy="172" r="8" fill="#7c95ff" />
      <circle cx="678" cy="156" r="8" fill="#1aa7ad" />
      <circle cx="730" cy="140" r="8" fill="#f59a58" />
      `
    ),
  "15b-rl-core": () =>
    visualFrame(
      "Reinforcement learning",
      "An agent acts in an environment and learns from delayed reward.",
      `
      <rect x="104" y="138" width="150" height="90" rx="18" fill="#dff2f4" stroke="#8ccfd3" />
      <rect x="370" y="118" width="160" height="130" rx="18" fill="#eef7ff" stroke="#bfd2ef" />
      <rect x="638" y="138" width="146" height="90" rx="18" fill="#fff0df" stroke="#f0c18e" />
      <text x="178" y="188" text-anchor="middle" fill="#214153" font-size="22" font-family="Nunito" font-weight="800">agent</text>
      <text x="450" y="184" text-anchor="middle" fill="#3c5270" font-size="22" font-family="Nunito" font-weight="800">environment</text>
      <text x="711" y="188" text-anchor="middle" fill="#84522b" font-size="22" font-family="Nunito" font-weight="800">reward</text>
      <line x1="254" y1="183" x2="364" y2="183" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <line x1="530" y1="183" x2="632" y2="183" stroke="#31465f" stroke-width="4" marker-end="url(#arrowHead)" />
      <path d="M708 138 C664 104, 570 96, 460 98 C346 100, 248 112, 178 136" fill="none" stroke="#f59a58" stroke-width="4.5" marker-end="url(#arrowHead)" />
      <text x="612" y="100" fill="#84522b" font-size="15" font-family="Nunito" font-weight="700">feedback</text>
      `
    )
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestion({ prompt, correct, distractors, explanation, points = 1 }) {
  const mixed = shuffle([
    { text: correct, ok: true },
    ...distractors.map((text) => ({ text, ok: false }))
  ]);
  return {
    prompt,
    choices: mixed.map((item) => item.text),
    answerIndex: mixed.findIndex((item) => item.ok),
    explanation,
    points
  };
}

const LESSONS = [
  {
    id: "00-map",
    title: "AI landscape and learning paradigms",
    track: "Foundations",
    level: "Beginner",
    duration: "7 min",
    sequence: 1,
    technical:
      "AI is the broad goal of intelligent behavior. ML is a subfield where models learn from data. Core paradigms are supervised (labeled outcomes), unsupervised (structure discovery), and reinforcement learning (reward-driven sequential optimization).",
    simple:
      "Three ways to learn: with answer keys, by grouping patterns, or by trial-and-reward in a game.",
    importance:
      "This prevents jargon confusion and helps learners choose methods by data and objective.",
    pitfall: "Calling every model an LLM and skipping problem framing.",
    snippet: "Choose paradigm from labels + feedback loop + output goal.",
    formulas: [
      {
        name: "Supervised objective",
        latex: "\\hat{f}=\\arg\\min_f\\;\\frac{1}{n}\\sum_{i=1}^{n}\\mathcal{L}(y_i,f(x_i))"
      },
      {
        name: "RL return",
        latex: "G_t=\\sum_{k=0}^{\\infty}\\gamma^k r_{t+k+1}"
      }
    ],
    visualCaption: "One map that situates all major learning styles.",
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="40" y="90" width="240" height="130" rx="16" fill="#0d8f92"/><rect x="330" y="32" width="240" height="95" rx="16" fill="#21aeb2"/><rect x="330" y="192" width="240" height="95" rx="16" fill="#75d0d3"/><rect x="620" y="90" width="240" height="130" rx="16" fill="#ff9a5b"/><text x="110" y="162" fill="#fff" font-size="30" font-family="Nunito" font-weight="800">AI</text><text x="360" y="90" fill="#fff" font-size="24" font-family="Nunito" font-weight="800">Supervised</text><text x="352" y="248" fill="#fff" font-size="24" font-family="Nunito" font-weight="800">Unsupervised</text><text x="660" y="162" fill="#fff" font-size="24" font-family="Nunito" font-weight="800">Reinforcement</text><line x1="280" y1="154" x2="330" y2="80" stroke="#30445c" stroke-width="6"/><line x1="280" y1="156" x2="330" y2="240" stroke="#30445c" stroke-width="6"/><line x1="570" y1="80" x2="620" y2="154" stroke="#30445c" stroke-width="6"/><line x1="570" y1="240" x2="620" y2="156" stroke="#30445c" stroke-width="6"/></svg>`,
    thoughtPrompts: [
      "Which real-life problem of yours is supervised, unsupervised, or RL?",
      "What is one case where rule-based systems beat ML?",
      "Why does objective definition come before algorithm choice?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "A system that learns from reward feedback over time is:",
          correct: "Reinforcement learning",
          distractors: ["Unsupervised learning", "Linear regression", "Naive Bayes"],
          explanation: "RL directly optimizes sequential behavior from rewards."
        }),
      () =>
        buildQuestion({
          prompt: "Labeled targets are required for:",
          correct: "Supervised learning",
          distractors: ["PCA only", "k-means only", "Policy gradient only"],
          explanation: "Supervised methods use input-output pairs."
        }),
      () =>
        buildQuestion({
          prompt: "Which phrase best describes unsupervised learning?",
          correct: "Discovering structure without labels",
          distractors: ["Maximizing expected reward", "Predicting labeled classes only", "Using only gradient clipping"],
          explanation: "Unsupervised settings do not have explicit target labels."
        })
    ],
    sources: [REF.cmu601]
  },
  {
    id: "01-mle-map",
    title: "MLE, MAP, and probabilistic estimation",
    track: "Foundations",
    level: "Intermediate",
    duration: "12 min",
    sequence: 2,
    technical:
      "Maximum Likelihood Estimation chooses parameters by maximizing $P(D\\mid\\theta)$. MAP adds a prior $P(\\theta)$ and maximizes the posterior $P(\\theta\\mid D)$, giving regularized estimates under a Bayesian interpretation.",
    simple:
      "MLE says: trust only observed evidence. MAP says: evidence plus prior belief.",
    importance:
      "Many ML algorithms can be interpreted as MLE/MAP with different assumptions.",
    pitfall: "Thinking priors are arbitrary instead of domain-informed assumptions.",
    snippet: "MAP = MLE + prior influence.",
    formulas: [
      {
        name: "MLE",
        latex: "\\hat{\\theta}_{\\text{MLE}}=\\arg\\max_{\\theta}\\;P(D\\mid\\theta)=\\arg\\max_{\\theta}\\sum_{i=1}^{n}\\log p(x_i\\mid\\theta)"
      },
      {
        name: "MAP",
        latex: "\\hat{\\theta}_{\\text{MAP}}=\\arg\\max_{\\theta}\\;P(\\theta\\mid D)=\\arg\\max_{\\theta}[\\log P(D\\mid\\theta)+\\log P(\\theta)]"
      },
      {
        name: "Bayes theorem",
        latex: "P(\\theta\\mid D)=\\frac{P(D\\mid\\theta)P(\\theta)}{P(D)}"
      }
    ],
    visual: IMG.bayes,
    visualCaption: "Posterior combines likelihood and prior belief.",
    thoughtPrompts: [
      "When would a strong prior be useful in low-data settings?",
      "How does MAP connect to regularization in linear models?",
      "Can a poor prior hurt more than help?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Which estimator explicitly contains a prior term?",
          correct: "MAP",
          distractors: ["MLE", "k-means", "SVM hard margin"],
          explanation: "MAP includes prior knowledge through P(theta)."
        }),
      () =>
        buildQuestion({
          prompt: "If prior is uniform, MAP often reduces to:",
          correct: "MLE",
          distractors: ["PCA", "Naive Bayes", "Decision trees"],
          explanation: "A flat prior adds near-constant log term."
        }),
      () => {
        const a = randomInt(2, 8);
        const b = randomInt(2, 8);
        const c = a * b;
        return buildQuestion({
          prompt: `In Bayes rule, if likelihood*prior is ${c} and evidence is ${b}, posterior is:`,
          correct: `${a}`,
          distractors: [`${b}`, `${c}`, `${a + b}`],
          explanation: "Posterior is proportional to likelihood*prior divided by evidence."
        });
      }
    ],
    sources: [REF.cmu601, REF.skl_linear]
  },
  {
    id: "02-splits",
    title: "Train/validation/test splits and leakage",
    track: "Foundations",
    level: "Beginner",
    duration: "11 min",
    sequence: 3,
    technical:
      "Training set learns parameters, validation set selects hyperparameters, and test set estimates final generalization. Leakage happens when information unavailable at inference leaks into training pipeline.",
    simple:
      "Class learning, mock exam, final exam. Seeing final answers early breaks fairness.",
    importance: "Reliable metrics are impossible without clean splits.",
    pitfall: "Fitting preprocessors on full dataset before split.",
    snippet: "Test set is for one-time final reporting.",
    formulas: [
      {
        name: "Generalization gap",
        latex: "\\Delta_{gen}=\\mathcal{L}_{test}-\\mathcal{L}_{train}"
      },
      {
        name: "k-fold mean score",
        latex: "\\bar{s}=\\frac{1}{k}\\sum_{j=1}^{k}s_j"
      }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="60" y="64" width="240" height="190" rx="18" fill="#dff3f5" stroke="#8acdd2" stroke-width="4"/><rect x="330" y="64" width="240" height="190" rx="18" fill="#fff1e1" stroke="#f2c18f" stroke-width="4"/><rect x="600" y="64" width="240" height="190" rx="18" fill="#f0f3ff" stroke="#b8c8ef" stroke-width="4"/><text x="128" y="122" fill="#174051" font-size="30" font-family="Nunito" font-weight="800">Train</text><text x="396" y="122" fill="#6a451f" font-size="30" font-family="Nunito" font-weight="800">Validation</text><text x="686" y="122" fill="#32456b" font-size="30" font-family="Nunito" font-weight="800">Test</text><text x="96" y="164" fill="#30566a" font-size="22" font-family="Nunito">fit model</text><text x="359" y="164" fill="#7d542d" font-size="22" font-family="Nunito">tune hyperparams</text><text x="663" y="164" fill="#4e5f80" font-size="22" font-family="Nunito">final metric</text></svg>`,
    visualCaption: "Three non-overlapping sets with similar distributions.",
    thoughtPrompts: [
      "How should splits change for time-series forecasting?",
      "Which fields in your dataset can leak future information?",
      "Should test set ever drive feature engineering?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Validation data is mainly used to:",
          correct: "Tune model and hyperparameters",
          distractors: ["Train final parameters only", "Replace test set", "Compute embeddings only"],
          explanation: "Validation guides model selection before final test."
        }),
      () => {
        const n = randomInt(1000, 3000);
        const testN = Math.round(n * 0.15);
        return buildQuestion({
          prompt: `For ${n} samples with 70/15/15 split, test count is approximately:`,
          correct: `${testN}`,
          distractors: [`${Math.round(n * 0.7)}`, `${Math.round(n * 0.3)}`, `${Math.round(n * 0.1)}`],
          explanation: "Test fraction is 15% of all samples."
        });
      },
      () =>
        buildQuestion({
          prompt: "Which is leakage?",
          correct: "Standardizing on full data before split",
          distractors: ["Scaling using training statistics only", "Using validation for tuning", "Holding out test until end"],
          explanation: "Preprocessing must be fit on train only."
        })
    ],
    sources: [REF.skl_cv, REF.skl_pitfalls]
  },
  {
    id: "03-linear",
    title: "Regression framing and linear regression",
    track: "Supervised Learning",
    level: "Beginner",
    duration: "11 min",
    sequence: 4,
    technical:
      "Regression predicts continuous targets. Linear regression models expected output as affine combination of features and minimizes squared error under common assumptions.",
    simple:
      "Draw a trend line that best fits scattered points.",
    importance:
      "Foundational for optimization, error analysis, and parametric modeling.",
    pitfall: "Interpreting correlation as causation.",
    snippet: "Linear model = interpretable baseline for continuous prediction.",
    formulas: [
      { name: "Model", latex: "\\hat{y}=w^T x+b" },
      { name: "MSE", latex: "\\text{MSE}=\\frac{1}{n}\\sum_{i=1}^{n}(y_i-\\hat{y}_i)^2" },
      {
        name: "Normal equation",
        latex: "\\hat{w}=(X^TX)^{-1}X^Ty"
      }
    ],
    visual: IMG.linearRegression,
    visualCaption: "Best-fit line minimizes squared residuals.",
    thoughtPrompts: [
      "When would MAE be preferable to MSE?",
      "How do outliers distort an MSE fit?",
      "What does coefficient sign tell you?"
    ],
    quizTemplates: [
      () => {
        const x = randomInt(2, 6);
        const w = randomInt(1, 5);
        const b = randomInt(0, 4);
        return buildQuestion({
          prompt: `Given y_hat=${w}x+${b}, y_hat at x=${x} is:`,
          correct: `${w * x + b}`,
          distractors: [`${w + x + b}`, `${w * x - b}`, `${x + b}`],
          explanation: "Substitute x into the linear equation."
        });
      },
      () =>
        buildQuestion({
          prompt: "Linear regression is primarily for:",
          correct: "Continuous prediction",
          distractors: ["Sequence generation", "Unlabeled clustering", "Policy optimization"],
          explanation: "Regression outputs real values."
        }),
      () =>
        buildQuestion({
          prompt: "Which loss is most standard for linear regression?",
          correct: "Mean squared error",
          distractors: ["Cross entropy", "Hinge loss", "BLEU"],
          explanation: "MSE is the classical objective for OLS linear regression."
        })
    ],
    sources: [REF.skl_linear, REF.cmu601]
  },
  {
    id: "04-poly",
    title: "Polynomial regression",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "9 min",
    sequence: 5,
    technical:
      "Polynomial regression augments input features with powers such as $x$, $x^2$, and higher terms. It still stays linear in the parameters even while modeling nonlinear trends in the input.",
    simple: "If straight line fails, bend the fit using extra feature terms.",
    importance: "Shows nonlinear fit without leaving linear-model family.",
    pitfall: "Using high degree without regularization, causing oscillation.",
    snippet: "Nonlinear in input, linear in parameters.",
    formulas: [
      { name: "Polynomial model", latex: "\\hat{y}=w_0+w_1x+w_2x^2+\\cdots+w_kx^k" },
      { name: "Feature map", latex: "\\phi(x)=[1,x,x^2,\\ldots,x^k]^T" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><path d="M70 256 Q180 74 320 148 T560 130 T840 66" fill="none" stroke="#0d8f92" stroke-width="8"/><circle cx="90" cy="240" r="10" fill="#ff9a5b"/><circle cx="170" cy="120" r="10" fill="#ff9a5b"/><circle cx="270" cy="162" r="10" fill="#ff9a5b"/><circle cx="390" cy="122" r="10" fill="#ff9a5b"/><circle cx="540" cy="136" r="10" fill="#ff9a5b"/><circle cx="690" cy="108" r="10" fill="#ff9a5b"/><circle cx="820" cy="72" r="10" fill="#ff9a5b"/></svg>`,
    visualCaption: "Curved trend capture through polynomial feature expansion.",
    thoughtPrompts: [
      "How do you choose degree k without overfitting?",
      "Why does validation error guide polynomial degree?",
      "Could splines be more stable than high-degree polynomials?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Polynomial regression is best described as:",
          correct: "Linear in parameters after nonlinear feature mapping",
          distractors: ["Always non-convex", "An unsupervised clustering method", "Equivalent to kNN"],
          explanation: "Weights remain linear even when features are polynomial."
        }),
      () => {
        const x = randomInt(2, 4);
        const y = 1 + 2 * x + x * x;
        return buildQuestion({
          prompt: `For y_hat = 1 + 2x + x^2, value at x=${x} is:`,
          correct: `${y}`,
          distractors: [`${1 + 2 * x}`, `${x * x}`, `${y + 1}`],
          explanation: "Compute linear and quadratic terms together."
        });
      },
      () =>
        buildQuestion({
          prompt: "Main risk of very high polynomial degree:",
          correct: "Overfitting and unstable extrapolation",
          distractors: ["Guaranteed better generalization", "No need for regularization", "No sensitivity to noise"],
          explanation: "Excessive degree can fit noise."
        })
    ],
    sources: [REF.skl_linear, REF.cmu601]
  },
  {
    id: "05-ridge-lasso",
    title: "Ridge and Lasso regularization",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "12 min",
    sequence: 6,
    technical:
      "Ridge adds L2 penalty and shrinks coefficients smoothly. Lasso adds L1 penalty and can create sparse solutions with exact zeros.",
    simple:
      "Regularization adds discipline so the model does not chase every noise bump.",
    importance: "Core approach to control complexity and improve generalization.",
    pitfall: "Applying penalties before standardizing features.",
    snippet: "Ridge for shrinkage, Lasso for shrinkage + feature selection tendency.",
    formulas: [
      {
        name: "Ridge",
        latex: "\\min_w\\;\\frac{1}{n}\\sum_{i=1}^{n}(y_i-w^Tx_i)^2+\\lambda\\lVert w\\rVert_2^2"
      },
      {
        name: "Lasso",
        latex: "\\min_w\\;\\frac{1}{n}\\sum_{i=1}^{n}(y_i-w^Tx_i)^2+\\lambda\\lVert w\\rVert_1"
      }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><ellipse cx="260" cy="160" rx="150" ry="105" fill="#daf1f3" stroke="#89cad0" stroke-width="4"/><ellipse cx="260" cy="160" rx="84" ry="58" fill="#bfe4e8" stroke="#89cad0" stroke-width="4"/><rect x="540" y="54" width="240" height="210" rx="18" fill="#ffe8d1" stroke="#f2c18f" stroke-width="4"/><line x1="540" y1="160" x2="780" y2="160" stroke="#f2c18f" stroke-width="4"/><line x1="660" y1="54" x2="660" y2="264" stroke="#f2c18f" stroke-width="4"/></svg>`,
    visualCaption: "L2 smooth contours vs L1 corner geometry.",
    thoughtPrompts: [
      "When is sparse model interpretability critical?",
      "What happens to bias/variance as lambda increases?",
      "Why can correlated features split weights strangely under L1?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Which penalty tends to set some coefficients to zero?",
          correct: "L1 (Lasso)",
          distractors: ["L2 (Ridge)", "No regularization", "Cross entropy"],
          explanation: "L1 geometry encourages sparsity."
        }),
      () =>
        buildQuestion({
          prompt: "Increasing lambda generally:",
          correct: "Shrinks coefficients and can reduce variance",
          distractors: ["Always lowers test error", "Increases model flexibility", "Removes need for validation"],
          explanation: "Stronger regularization constrains complexity."
        }),
      () =>
        buildQuestion({
          prompt: "Ridge is often preferred over Lasso when:",
          correct: "Many small correlated effects should be retained",
          distractors: ["You require exact zero coefficients", "No scaling is possible", "Labels are missing"],
          explanation: "Ridge spreads weight across correlated predictors."
        })
    ],
    sources: [REF.skl_linear, REF.cmu601]
  },
  {
    id: "06-bias-variance",
    title: "Bias-variance tradeoff, underfit, overfit",
    track: "Supervised Learning",
    level: "Beginner",
    duration: "10 min",
    sequence: 7,
    technical:
      "Underfitting corresponds to high bias and poor train/test performance. Overfitting corresponds to low training error but poor test error due to high variance.",
    simple:
      "Too simple is under-prepared. Too memorized is brittle. Good model generalizes.",
    importance: "Most ML tuning decisions optimize this tradeoff.",
    pitfall: "Judging model quality only by training metrics.",
    snippet: "Validation curve shape reveals fit regime.",
    formulas: [
      {
        name: "Error decomposition",
        latex: "\\mathbb{E}[(y-\\hat{f}(x))^2]=\\text{Bias}(\\hat{f}(x))^2+\\text{Var}(\\hat{f}(x))+\\sigma^2"
      }
    ],
    visual: IMG.biasVariance,
    visualCaption: "Test error U-shape against model complexity.",
    thoughtPrompts: [
      "What is one cheap way to reduce variance besides adding data?",
      "How does model capacity interact with small datasets?",
      "Why can tiny train loss be a warning sign?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "99% train, 70% test accuracy likely indicates:",
          correct: "Overfitting (high variance)",
          distractors: ["Underfitting", "Perfect calibration", "No issue"],
          explanation: "Large train-test gap suggests poor generalization."
        }),
      () =>
        buildQuestion({
          prompt: "Underfitting usually means:",
          correct: "High bias",
          distractors: ["High variance only", "Data leakage", "Perfect fit"],
          explanation: "Model too simple to capture signal."
        }),
      () =>
        buildQuestion({
          prompt: "Which action often reduces overfitting?",
          correct: "Increase regularization",
          distractors: ["Increase model complexity blindly", "Tune on test repeatedly", "Drop validation set"],
          explanation: "Regularization reduces variance."
        })
    ],
    sources: [REF.cmu601, REF.skl_linear]
  },
  {
    id: "07-logistic",
    title: "Logistic regression: binary, multiclass, ordinal",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "13 min",
    sequence: 8,
    technical:
      "Logistic regression transforms the linear score $z = w^T x + b$ with a sigmoid to model class probability for binary tasks. Multiclass settings use softmax with multinomial loss. Ordinal logistic variants model ordered categories with cumulative thresholds.",
    simple:
      "Raw score becomes probability, then probability becomes class decision.",
    importance: "A core probabilistic classifier and baseline for many pipelines.",
    pitfall: "Using fixed threshold 0.5 when business costs are asymmetric.",
    snippet: "Binary -> sigmoid, multiclass -> softmax, ordinal -> ordered thresholds.",
    formulas: [
      { name: "Binary probability", latex: "p(y=1\\mid x)=\\sigma(z)=\\frac{1}{1+e^{-z}},\;z=w^Tx+b" },
      { name: "Softmax", latex: "p(y=k\\mid x)=\\frac{e^{z_k}}{\\sum_{j=1}^{K}e^{z_j}}" },
      { name: "Decision rule", latex: "\\hat{y}=\\mathbb{1}[p(y=1\\mid x)\\geq t]" }
    ],
    visual: IMG.logisticCurve,
    visualCaption: "Sigmoid maps unbounded score to probability range [0,1].",
    thoughtPrompts: [
      "How would you tune threshold if false negatives are expensive?",
      "When should probabilistic calibration be checked?",
      "Why does softmax handle multiclass naturally?"
    ],
    quizTemplates: [
      () => {
        const p = pick([0.22, 0.41, 0.63, 0.78]);
        const t = pick([0.5, 0.7]);
        const cls = p >= t ? "Class 1" : "Class 0";
        return buildQuestion({
          prompt: `Predicted probability is ${p}, threshold ${t}. Predicted class is:`,
          correct: cls,
          distractors: [cls === "Class 1" ? "Class 0" : "Class 1", "Undecidable", "Always Class 1"],
          explanation: "Compare p with threshold t."
        });
      },
      () =>
        buildQuestion({
          prompt: "Multiclass logistic regression usually uses:",
          correct: "Softmax over class logits",
          distractors: ["Hinge loss only", "Nearest centroid", "No probabilities"],
          explanation: "Softmax gives normalized class probabilities."
        }),
      () =>
        buildQuestion({
          prompt: "Why is logistic more suitable than raw linear thresholding for classification?",
          correct: "Provides bounded probabilistic output",
          distractors: ["Eliminates all false positives", "Avoids optimization", "Makes data linearly separable"],
          explanation: "Sigmoid/softmax produce interpretable confidence scores."
        })
    ],
    sources: [REF.skl_linear, REF.skl_multi, REF.cmu601]
  },
  {
    id: "08-loss-functions",
    title: "Cost functions for regression and classification",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "12 min",
    sequence: 9,
    technical:
      "Loss defines what errors matter. Regression commonly uses MSE/MAE/Huber. Classification commonly uses cross-entropy and hinge loss. Model behavior follows the loss geometry.",
    simple:
      "Loss is the scoring rule you use to grade the model's mistakes.",
    importance: "Wrong loss gives wrong optimization target.",
    pitfall: "Choosing accuracy-only objective in heavily imbalanced problems.",
    snippet: "Objective choice controls robustness and calibration behavior.",
    formulas: [
      { name: "MAE", latex: "\\text{MAE}=\\frac{1}{n}\\sum_{i=1}^{n}|y_i-\\hat{y}_i|" },
      { name: "Cross-entropy (binary)", latex: "\\mathcal{L}=-\\frac{1}{n}\\sum_{i=1}^{n}[y_i\\log p_i+(1-y_i)\\log(1-p_i)]" },
      { name: "Hinge loss", latex: "\\mathcal{L}=\\sum_{i=1}^{n}\\max(0,1-y_i f(x_i))" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="70" y="50" width="350" height="220" rx="18" fill="#ecf8f9"/><rect x="480" y="50" width="350" height="220" rx="18" fill="#fff3e6"/><text x="170" y="90" fill="#265361" font-size="28" font-family="Nunito" font-weight="800">Regression losses</text><text x="560" y="90" fill="#7a4f2d" font-size="28" font-family="Nunito" font-weight="800">Classification losses</text><text x="98" y="136" fill="#2b5a65" font-size="23" font-family="Nunito">MSE, MAE, Huber</text><text x="510" y="136" fill="#7a4f2d" font-size="23" font-family="Nunito">Cross-entropy, Hinge</text></svg>`,
    visualCaption: "Loss families align with target type and error preference.",
    thoughtPrompts: [
      "Why is MAE often more outlier-robust than MSE?",
      "When might hinge loss be preferred over log-loss?",
      "How does loss choice affect calibration?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "For binary probabilistic classification, standard loss is:",
          correct: "Cross-entropy (log loss)",
          distractors: ["MSE only", "Cosine distance", "Silhouette score"],
          explanation: "Log-loss directly optimizes probabilistic classification likelihood."
        }),
      () =>
        buildQuestion({
          prompt: "Loss that is generally less sensitive to outliers than MSE:",
          correct: "MAE",
          distractors: ["Squared loss", "Cross entropy", "Hinge"],
          explanation: "MAE penalizes linearly rather than quadratically."
        }),
      () =>
        buildQuestion({
          prompt: "Hinge loss is classically associated with:",
          correct: "Support Vector Machines",
          distractors: ["k-means", "Naive Bayes", "PCA"],
          explanation: "SVM margin optimization uses hinge-like objectives."
        })
    ],
    sources: [REF.skl_linear, REF.skl_svm, REF.skl_metrics]
  },
  {
    id: "09-bayes-nb",
    title: "Bayes theorem and Naive Bayes",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "11 min",
    sequence: 10,
    technical:
      "Naive Bayes applies Bayes theorem assuming conditional independence among features given class label. It is called naive because this assumption is often false but still practically effective in many domains like text.",
    simple:
      "Many small clues vote independently toward a final class.",
    importance: "Fast, strong baseline for high-dimensional sparse features.",
    pitfall: "Treating independence assumption as literal truth.",
    snippet: "Naive = conditional independence simplification.",
    formulas: [
      { name: "Bayes rule", latex: "P(y\\mid x)=\\frac{P(x\\mid y)P(y)}{P(x)}" },
      { name: "Naive factorization", latex: "P(x\\mid y)=\\prod_{j=1}^{d}P(x_j\\mid y)" },
      { name: "Classification rule", latex: "\\hat{y}=\\arg\\max_y P(y)\\prod_{j=1}^{d}P(x_j\\mid y)" }
    ],
    visual: IMG.bayes,
    visualCaption: "Posterior class probability from likelihood and prior.",
    thoughtPrompts: [
      "Why does Naive Bayes still work when independence is imperfect?",
      "How does class prior influence rare-class predictions?",
      "When does Laplace smoothing help?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Naive Bayes is called 'naive' because it assumes:",
          correct: "Conditional independence between features given class",
          distractors: ["No class priors", "No labels needed", "No probabilities used"],
          explanation: "The key simplification is conditional independence."
        }),
      () =>
        buildQuestion({
          prompt: "Naive Bayes often performs well in:",
          correct: "Text classification",
          distractors: ["Only image segmentation", "Only reinforcement control", "Continuous control robotics only"],
          explanation: "It is efficient and competitive in many text tasks."
        }),
      () =>
        buildQuestion({
          prompt: "Which term avoids zero probabilities in NB?",
          correct: "Smoothing (e.g., Laplace)",
          distractors: ["Dropout", "Batch norm", "Early stopping"],
          explanation: "Smoothing handles unseen feature-class combinations."
        })
    ],
    sources: [REF.skl_nb, REF.cmu601]
  },
  {
    id: "10-svm",
    title: "Support Vector Machines (OvR and OvO)",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "14 min",
    sequence: 11,
    technical:
      "SVM finds maximum-margin separators. Soft-margin SVM handles nonseparable data with slack variables. Multiclass handling is usually one-vs-rest or one-vs-one decomposition.",
    simple:
      "Find the dividing line with maximum safety gap from both classes.",
    importance: "Strong classic classifier with geometric interpretation.",
    pitfall: "Ignoring feature scaling before SVM training.",
    snippet: "OvR trains K classifiers; OvO trains K(K-1)/2 classifiers.",
    formulas: [
      { name: "Hard margin objective", latex: "\\min_{w,b}\\frac{1}{2}\\lVert w\\rVert^2\;\\text{s.t. }y_i(w^Tx_i+b)\\ge 1" },
      { name: "Soft margin objective", latex: "\\min_{w,b,\\xi}\\frac{1}{2}\\lVert w\\rVert^2 + C\\sum_i \\xi_i\;\\text{s.t. }y_i(w^Tx_i+b)\\ge 1-\\xi_i" },
      { name: "Decision function", latex: "f(x)=\\text{sign}(w^Tx+b)" }
    ],
    visual: IMG.svm,
    visualCaption: "Maximum-margin hyperplane and support vectors.",
    thoughtPrompts: [
      "When might linear SVM outperform deep models?",
      "How does C trade margin width vs training errors?",
      "When is OvO preferred over OvR?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Core SVM idea is to maximize:",
          correct: "Margin between classes",
          distractors: ["Number of trees", "Class prior", "Sequence length"],
          explanation: "SVM seeks large-margin separation."
        }),
      () =>
        buildQuestion({
          prompt: "For K classes, OvO trains how many classifiers?",
          correct: "K(K-1)/2",
          distractors: ["K", "2K", "K^2"],
          explanation: "One binary classifier for each class pair."
        }),
      () => {
        const k = pick([3, 4, 5, 6]);
        const ovo = (k * (k - 1)) / 2;
        return buildQuestion({
          prompt: `If K=${k}, OvO count is:`,
          correct: `${ovo}`,
          distractors: [`${k}`, `${k * k}`, `${2 * k}`],
          explanation: "OvO uses all pairwise class combinations."
        });
      }
    ],
    sources: [REF.skl_svm, REF.skl_multi, REF.cmu601]
  },
  {
    id: "11-parametric-knn",
    title: "Parametric vs non-parametric and kNN",
    track: "Supervised Learning",
    level: "Beginner",
    duration: "10 min",
    sequence: 12,
    technical:
      "Parametric models learn a fixed-size parameter set (for example linear/logistic models). Non-parametric methods like kNN store data and let complexity grow with sample size.",
    simple:
      "Parametric = compact formula. Non-parametric = remember examples and compare locally.",
    importance: "Helps select models by data size, latency, and interpretability needs.",
    pitfall: "Using kNN without scaling and distance metric tuning.",
    snippet: "kNN predicts by neighborhood vote/average.",
    formulas: [
      { name: "kNN classification", latex: "\\hat{y}=\\text{mode}(\\{y_j: x_j\\in\\mathcal{N}_k(x)\\})" },
      { name: "kNN regression", latex: "\\hat{y}=\\frac{1}{k}\\sum_{x_j\\in\\mathcal{N}_k(x)} y_j" }
    ],
    visual: IMG.knn,
    visualCaption: "Prediction driven by nearest-neighbor region.",
    thoughtPrompts: [
      "What happens when k=1 vs very large k?",
      "How does curse of dimensionality affect kNN?",
      "Why does normalization matter for distance methods?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "kNN is non-parametric because it:",
          correct: "Does not fit a fixed-size parametric equation",
          distractors: ["Needs no data", "Uses no distance metrics", "Cannot do regression"],
          explanation: "kNN relies directly on stored training examples."
        }),
      () =>
        buildQuestion({
          prompt: "Increasing k in kNN usually makes decision boundary:",
          correct: "Smoother",
          distractors: ["More jagged", "Always perfect", "Unchanged"],
          explanation: "Larger neighborhoods reduce local variance."
        }),
      () =>
        buildQuestion({
          prompt: "Critical preprocessing for kNN:",
          correct: "Feature scaling",
          distractors: ["Target smoothing only", "Dropout", "Tokenizer selection"],
          explanation: "Distance scale is sensitive to feature magnitudes."
        })
    ],
    sources: [REF.skl_neighbors, REF.skl_linear]
  },
  {
    id: "12-trees",
    title: "Decision trees",
    track: "Supervised Learning",
    level: "Beginner",
    duration: "10 min",
    sequence: 13,
    technical:
      "Decision trees recursively split feature space to reduce impurity. Common criteria are Gini and entropy. They are interpretable but high-variance if unconstrained.",
    simple: "Ask yes/no questions until the answer is clear.",
    importance: "Interpretability and strong base learner for ensembles.",
    pitfall: "Growing deep tree without pruning/depth controls.",
    snippet: "Tree nodes reduce uncertainty step-by-step.",
    formulas: [
      { name: "Gini", latex: "G=1-\\sum_{c=1}^{C}p_c^2" },
      { name: "Entropy", latex: "H=-\\sum_{c=1}^{C}p_c\\log p_c" },
      { name: "Information gain", latex: "IG=I(parent)-\\sum_{k}\\frac{n_k}{n}I(child_k)" }
    ],
    visual: IMG.tree,
    visualCaption: "Recursive branching from root to leaves.",
    thoughtPrompts: [
      "How do min_samples_leaf and max_depth control overfitting?",
      "When is a shallow tree preferable to a deep one?",
      "Why are trees robust to monotonic feature scaling?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "A standard impurity metric for classification trees is:",
          correct: "Gini impurity",
          distractors: ["BLEU", "AUC only", "Cosine similarity"],
          explanation: "Gini and entropy are classic split metrics."
        }),
      () =>
        buildQuestion({
          prompt: "Tree overfitting is most directly reduced by:",
          correct: "Depth/leaf constraints",
          distractors: ["Increasing noise", "No validation", "Shuffling labels"],
          explanation: "Capacity controls regularize tree growth."
        }),
      () =>
        buildQuestion({
          prompt: "Decision trees are often valued for:",
          correct: "Interpretability",
          distractors: ["Guaranteed global optimum", "No need for data", "Fixed linear boundary"],
          explanation: "Tree paths are human-readable decision logic."
        })
    ],
    sources: [REF.skl_tree]
  },
  {
    id: "13-rf",
    title: "Random forest and bagging",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "11 min",
    sequence: 14,
    technical:
      "Bagging trains multiple learners on bootstrap samples and averages predictions to reduce variance. Random Forest adds feature subsampling at each split to decorrelate trees.",
    simple:
      "Ask many independent judges; aggregate their votes.",
    importance: "Powerful structured-data baseline with good robustness.",
    pitfall: "Confusing bagging with boosting.",
    snippet: "Parallel variance reduction via averaging.",
    formulas: [
      { name: "Bootstrap sample size", latex: "x^{(b)}\\sim\\text{SampleWithReplacement}(D)" },
      { name: "Ensemble vote", latex: "\\hat{y}=\\text{mode}(\\{h_b(x)\\}_{b=1}^{B})" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="70" y="60" width="760" height="200" rx="18" fill="#ecf8f9"/><rect x="130" y="100" width="90" height="120" rx="10" fill="#84d4d8"/><rect x="260" y="90" width="90" height="130" rx="10" fill="#5fc2c8"/><rect x="390" y="110" width="90" height="110" rx="10" fill="#3bb0b3"/><rect x="520" y="95" width="90" height="125" rx="10" fill="#1f9ca0"/><rect x="650" y="105" width="90" height="115" rx="10" fill="#0d8f92"/><text x="330" y="285" fill="#2d5c66" font-size="24" font-family="Nunito">many decorrelated trees, one robust vote</text></svg>`,
    visualCaption: "Parallel trees combined into stable prediction.",
    thoughtPrompts: [
      "Why does feature subsampling help random forests?",
      "When can random forest beat boosted trees?",
      "How to interpret feature importance carefully?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Bagging mainly reduces:",
          correct: "Variance",
          distractors: ["Bias only", "Label count", "Model interpretability"],
          explanation: "Averaging independent learners smooths variance."
        }),
      () =>
        buildQuestion({
          prompt: "Random Forest differs from plain bagged trees by:",
          correct: "Random feature subsets at split time",
          distractors: ["No bootstrapping", "No trees", "Sequential error fitting"],
          explanation: "Feature randomness decorrelates learners."
        }),
      () =>
        buildQuestion({
          prompt: "Training of bagging members is typically:",
          correct: "Parallel and independent",
          distractors: ["Strictly sequential", "Without labels", "Gradient-free only"],
          explanation: "Each bootstrap model can be trained independently."
        })
    ],
    sources: [REF.skl_ensemble]
  },
  {
    id: "14-xgboost",
    title: "Boosting and XGBoost",
    track: "Supervised Learning",
    level: "Intermediate",
    duration: "12 min",
    sequence: 15,
    technical:
      "Boosting builds learners sequentially, each fitting residuals/errors from previous stage. XGBoost adds regularization, shrinkage, and efficient tree optimization for strong tabular performance.",
    simple:
      "Each new learner focuses on mistakes made by earlier learners.",
    importance: "Very strong method for structured tabular tasks.",
    pitfall: "Too many boosting rounds without early stopping.",
    snippet: "Sequential additive correction.",
    formulas: [
      { name: "Additive model", latex: "F_t(x)=F_{t-1}(x)+\\eta h_t(x)" },
      { name: "Second-order objective", latex: "\\mathcal{L}^{(t)}\\approx\\sum_i[g_i h_t(x_i)+\\frac{1}{2}h_i h_t(x_i)^2]+\\Omega(h_t)" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="90" y="70" width="90" height="160" rx="10" fill="#ffd8b8"/><rect x="250" y="98" width="90" height="132" rx="10" fill="#ffbf96"/><rect x="410" y="116" width="90" height="114" rx="10" fill="#ffa46e"/><rect x="570" y="132" width="90" height="98" rx="10" fill="#ff8c5a"/><line x1="180" y1="150" x2="250" y2="150" stroke="#4d5a6b" stroke-width="6"/><line x1="340" y1="160" x2="410" y2="160" stroke="#4d5a6b" stroke-width="6"/><line x1="500" y1="168" x2="570" y2="168" stroke="#4d5a6b" stroke-width="6"/><text x="245" y="280" fill="#7a4c2a" font-size="24" font-family="Nunito">stage-wise residual correction</text></svg>`,
    visualCaption: "Each stage improves residual errors from prior stage.",
    thoughtPrompts: [
      "Why does learning rate interact with number of boosting rounds?",
      "How does early stopping protect generalization?",
      "Why do boosted trees dominate many tabular benchmarks?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Boosting compared to bagging is:",
          correct: "Sequential rather than parallel",
          distractors: ["Unsupervised", "Non-ensemble", "Always linear"],
          explanation: "Each boosted model depends on previous errors."
        }),
      () =>
        buildQuestion({
          prompt: "XGBoost is especially popular for:",
          correct: "Structured/tabular data",
          distractors: ["Only image generation", "Only speech synthesis", "Only RL games"],
          explanation: "It is a strong tabular-data baseline."
        }),
      () =>
        buildQuestion({
          prompt: "Too many rounds in boosting often cause:",
          correct: "Overfitting",
          distractors: ["Guaranteed calibration", "Lower variance only", "No effect"],
          explanation: "Sequential fitting can overfit without controls."
        })
    ],
    sources: [REF.skl_ensemble, REF.xgboost]
  },
  {
    id: "15-ffnn-backprop",
    title: "Feedforward networks and backpropagation",
    track: "Deep Learning",
    level: "Intermediate",
    duration: "12 min",
    sequence: 16,
    technical:
      "A feedforward neural network composes affine layers and nonlinear activations. Backpropagation computes gradients of loss w.r.t. parameters efficiently using chain rule.",
    simple:
      "Prediction flows forward; error signal flows backward to correct weights.",
    importance: "Foundation for all deep architectures.",
    pitfall: "Ignoring learning-rate schedules and optimization diagnostics.",
    snippet: "Forward predicts, backward updates.",
    formulas: [
      { name: "Layer transform", latex: "a^{(l)}=\\sigma(W^{(l)}a^{(l-1)}+b^{(l)})" },
      { name: "Gradient descent", latex: "\\theta\\leftarrow\\theta-\\eta\\nabla_{\\theta}\\mathcal{L}" },
      { name: "Chain rule", latex: "\\frac{\\partial \\mathcal{L}}{\\partial W^{(l)}}=\\frac{\\partial \\mathcal{L}}{\\partial a^{(l)}}\\frac{\\partial a^{(l)}}{\\partial W^{(l)}}" }
    ],
    visual: IMG.ffnn,
    visualCaption: "Multilayer feedforward topology.",
    thoughtPrompts: [
      "How does activation choice affect gradient flow?",
      "What indicates exploding gradients during training?",
      "Why can normalization layers stabilize optimization?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Backpropagation computes:",
          correct: "Loss gradients with respect to parameters",
          distractors: ["Nearest neighbors", "Entropy of labels", "Only accuracy"],
          explanation: "Gradients guide parameter updates."
        }),
      () =>
        buildQuestion({
          prompt: "Forward pass primarily does:",
          correct: "Generate prediction from current weights",
          distractors: ["Update optimizer state", "Compute train/test split", "Build k-d tree"],
          explanation: "Forward pass computes model outputs."
        }),
      () =>
        buildQuestion({
          prompt: "Very high learning rate commonly causes:",
          correct: "Divergent or unstable training",
          distractors: ["Always faster convergence", "Automatic regularization", "No gradient noise"],
          explanation: "Step size can overshoot minima."
        })
    ],
    sources: [REF.cmu601]
  },
  {
    id: "16-cnn",
    title: "Convolutional neural networks (CNN)",
    track: "Deep Learning",
    level: "Intermediate",
    duration: "10 min",
    sequence: 17,
    technical:
      "CNNs use shared convolution kernels over local receptive fields. Stacked layers learn hierarchical features from edges to object parts.",
    simple:
      "Scan tiny windows across an image and learn reusable pattern detectors.",
    importance: "Core architecture for spatial data and vision pipelines.",
    pitfall: "Using large dense layers early instead of convolutional structure.",
    snippet: "Local connectivity + weight sharing = efficient vision learning.",
    formulas: [
      { name: "Discrete convolution", latex: "(I*K)(u,v)=\\sum_m\\sum_n I(u-m,v-n)K(m,n)" },
      { name: "Feature map unit", latex: "h_{ij}=\\sigma((W*x)_{ij}+b)" }
    ],
    visual: IMG.cnn,
    visualCaption: "Convolution and pooling flow toward class output.",
    thoughtPrompts: [
      "Why does weight sharing improve sample efficiency?",
      "How does pooling affect translation sensitivity?",
      "When might vision transformers replace CNNs?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "A major advantage of CNN weight sharing is:",
          correct: "Fewer parameters and reusable local pattern detectors",
          distractors: ["No need for activations", "Guaranteed perfect accuracy", "No training needed"],
          explanation: "Shared kernels reduce parameter count and detect repeated motifs."
        }),
      () =>
        buildQuestion({
          prompt: "CNNs are especially suited for:",
          correct: "Spatially structured inputs (images)",
          distractors: ["Only scalar inputs", "Only tabular boosting", "Only kNN"],
          explanation: "Local spatial relationships are central in images."
        }),
      () =>
        buildQuestion({
          prompt: "Pooling often helps by:",
          correct: "Reducing spatial resolution and improving robustness",
          distractors: ["Increasing sequence length", "Adding class labels", "Removing nonlinearity"],
          explanation: "Pooling summarizes local neighborhoods."
        })
    ],
    sources: [REF.cmu601]
  },
  {
    id: "17-rnn-lstm-gru",
    title: "RNN, LSTM, and GRU",
    track: "Deep Learning",
    level: "Intermediate",
    duration: "13 min",
    sequence: 18,
    technical:
      "RNNs model sequences via recurrent hidden state. LSTM and GRU introduce gating to preserve useful long-term information and mitigate vanishing gradients.",
    simple:
      "The network reads tokens over time and decides what to remember or forget.",
    importance: "Essential sequence-model intuition before transformers.",
    pitfall: "Expecting vanilla RNN to keep long-range context reliably.",
    snippet: "Gates stabilize memory in long sequences.",
    formulas: [
      { name: "RNN update", latex: "h_t=\\phi(W_xx_t+W_hh_{t-1}+b)" },
      { name: "LSTM memory", latex: "c_t=f_t\\odot c_{t-1}+i_t\\odot\\tilde{c}_t" },
      { name: "GRU state", latex: "h_t=(1-z_t)\\odot h_{t-1}+z_t\\odot\\tilde{h}_t" }
    ],
    visual: IMG.rnn,
    visualCaption: "Unrolled recurrent computation through time.",
    alternateVisual: IMG.lstm,
    alternateCaption: "LSTM gating internals.",
    thoughtPrompts: [
      "When might GRU be preferred over LSTM?",
      "How do sequence length and memory constraints interact?",
      "Why does teacher forcing help sequence training?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "LSTM improves on vanilla RNN mainly via:",
          correct: "Gated memory control",
          distractors: ["No hidden state", "No recurrence", "No gradients"],
          explanation: "Gates manage information flow through long contexts."
        }),
      () =>
        buildQuestion({
          prompt: "GRU compared with LSTM often has:",
          correct: "Fewer gates/parameters",
          distractors: ["No recurrence", "Always higher compute", "No nonlinearities"],
          explanation: "GRU is a streamlined gated recurrent unit."
        }),
      () =>
        buildQuestion({
          prompt: "Vanishing gradients mostly hurt:",
          correct: "Long-range dependency learning",
          distractors: ["Static tabular features", "Data splitting", "Vector normalization"],
          explanation: "Small gradients weaken learning across many time steps."
        })
    ],
    sources: [REF.cmu601]
  },
  {
    id: "18-transformer",
    title: "Transformer, encoder/decoder, BERT and GPT",
    track: "LLM Foundations",
    level: "Intermediate",
    duration: "14 min",
    sequence: 19,
    technical:
      "Transformers use self-attention to model token dependencies in parallel. Encoder-only architectures (BERT) focus on representation/understanding; decoder-only architectures (GPT) focus on autoregressive generation.",
    simple:
      "Each token can directly look at other useful tokens before deciding meaning or next word.",
    importance: "Core architecture behind modern LLM systems.",
    pitfall: "Treating encoder and decoder models as interchangeable.",
    snippet: "Attention replaces recurrence for long-range token interactions.",
    formulas: [
      { name: "Scaled dot-product attention", latex: "\\text{Attn}(Q,K,V)=\\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V" },
      { name: "Autoregressive objective", latex: "\\max_\\theta\\sum_t \\log p_\\theta(x_t\\mid x_{<t})" }
    ],
    visual: IMG.transformer,
    visualCaption: "Full transformer architecture schematic.",
    thoughtPrompts: [
      "Why does causal masking matter for GPT-style generation?",
      "What limits arise from finite context windows?",
      "How does pretraining objective shape capabilities?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "GPT-style models are mainly:",
          correct: "Decoder-only autoregressive transformers",
          distractors: ["Encoder-only classifiers", "kNN models", "Bagged trees"],
          explanation: "GPT predicts next token using causal decoding."
        }),
      () =>
        buildQuestion({
          prompt: "BERT is mainly:",
          correct: "Encoder-only transformer",
          distractors: ["Decoder-only generator", "RNN-only model", "SVM kernel trick"],
          explanation: "BERT emphasizes bidirectional encoding."
        }),
      () =>
        buildQuestion({
          prompt: "Self-attention allows tokens to:",
          correct: "Weight relationships with other tokens",
          distractors: ["Ignore context", "Remove embeddings", "Skip softmax"],
          explanation: "Attention computes contextual interactions."
        })
    ],
    sources: [REF.p_attention, REF.p_bert, REF.p_gpt3]
  },
  {
    id: "19-prompt",
    title: "Prompt engineering fundamentals",
    track: "LLM Foundations",
    level: "Beginner",
    duration: "8 min",
    sequence: 20,
    technical:
      "Prompt structure strongly influences output quality. Effective prompts specify role, context, constraints, and desired output format.",
    simple:
      "Clear instructions produce clear answers.",
    importance: "Fastest quality gain before model fine-tuning.",
    pitfall: "Vague prompts with no acceptance criteria.",
    snippet: "Role + task + constraints + format.",
    formulas: [
      { name: "Prompt template pattern", latex: "\\text{Prompt}=\\text{Role}+\\text{Context}+\\text{Task}+\\text{Constraints}+\\text{Format}" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="70" y="60" width="340" height="200" rx="16" fill="#ebf8fa"/><rect x="490" y="60" width="340" height="200" rx="16" fill="#fff1e3"/><text x="200" y="98" fill="#275060" font-size="28" font-family="Nunito" font-weight="800">Prompt</text><text x="625" y="98" fill="#7a4f2d" font-size="28" font-family="Nunito" font-weight="800">Output</text><rect x="110" y="126" width="260" height="16" rx="6" fill="#8ed7dd"/><rect x="110" y="154" width="240" height="16" rx="6" fill="#8ed7dd"/><rect x="530" y="126" width="260" height="16" rx="6" fill="#ffc694"/><rect x="530" y="154" width="230" height="16" rx="6" fill="#ffa773"/><line x1="410" y1="160" x2="490" y2="160" stroke="#4a5c74" stroke-width="6"/></svg>`,
    visualCaption: "Structured prompt drives controlled output quality.",
    thoughtPrompts: [
      "How would you alter prompt detail for a child vs engineer?",
      "What output format best supports automatic evaluation?",
      "How can prompt constraints reduce hallucination risk?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Stronger prompt example is:",
          correct: "Summarize in 5 bullets for grade-8 students.",
          distractors: ["Explain this", "Do better", "Make it nice"],
          explanation: "Clear audience + format + scope increases reliability."
        }),
      () =>
        buildQuestion({
          prompt: "Most useful addition for predictable outputs:",
          correct: "Explicit output schema/format",
          distractors: ["Longer random context", "No constraints", "No task definition"],
          explanation: "Structured formats reduce output ambiguity."
        }),
      () =>
        buildQuestion({
          prompt: "Prompt quality primarily affects:",
          correct: "Task framing and response consistency",
          distractors: ["GPU memory footprint", "Tokenizer vocab size", "Dataset storage"],
          explanation: "Prompting guides model behavior per request."
        })
    ],
    sources: [REF.p_gpt3]
  },
  {
    id: "20-finetune",
    title: "Fine-tuning, LoRA, and QLoRA",
    track: "LLM Foundations",
    level: "Advanced",
    duration: "12 min",
    sequence: 21,
    technical:
      "Full fine-tuning updates all model weights, while LoRA updates low-rank adapters on frozen base weights. QLoRA quantizes base weights and trains adapters, reducing memory requirements dramatically.",
    simple:
      "Instead of replacing the whole engine, attach compact tuning modules.",
    importance: "Makes LLM adaptation feasible on limited hardware.",
    pitfall: "Overfitting adapters on small noisy instruction data.",
    snippet: "PEFT trades full flexibility for efficiency.",
    formulas: [
      { name: "LoRA update", latex: "W'=W+\\Delta W,\\;\\Delta W=AB,\\;\\text{rank}(AB)\\ll\\min(m,n)" },
      { name: "Trainable params", latex: "\\#\\theta_{\\text{LoRA}}\\ll\\#\\theta_{\\text{full}}" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="50" y="72" width="800" height="180" rx="16" fill="#eef8fa" stroke="#d2e8eb" stroke-width="3"/><rect x="100" y="106" width="700" height="18" rx="7" fill="#9edee3"/><rect x="100" y="138" width="700" height="18" rx="7" fill="#9edee3"/><rect x="100" y="170" width="700" height="18" rx="7" fill="#9edee3"/><rect x="280" y="101" width="110" height="28" rx="8" fill="#ffa875"/><rect x="430" y="133" width="110" height="28" rx="8" fill="#ffa875"/><rect x="580" y="165" width="110" height="28" rx="8" fill="#ffa875"/></svg>`,
    visualCaption: "Adapter-based parameter-efficient tuning.",
    thoughtPrompts: [
      "When is full fine-tuning worth the extra compute?",
      "What evaluation should gate adapter release?",
      "How does quantization affect quality-memory tradeoff?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Main advantage of LoRA compared to full fine-tuning:",
          correct: "Far fewer trainable parameters",
          distractors: ["No training data needed", "No evaluation required", "Always best quality"],
          explanation: "LoRA updates compact low-rank adapters."
        }),
      () =>
        buildQuestion({
          prompt: "QLoRA adds which idea to LoRA?",
          correct: "Quantized base model weights",
          distractors: ["No adapters", "Only prompt tuning", "kNN retrieval"],
          explanation: "QLoRA couples quantization with adapter training."
        }),
      () =>
        buildQuestion({
          prompt: "PEFT is especially useful when:",
          correct: "Compute and memory budgets are limited",
          distractors: ["Unlimited hardware is available", "No task adaptation needed", "There is no labeled data"],
          explanation: "PEFT minimizes resource cost of adaptation."
        })
    ],
    sources: [REF.p_lora, REF.p_qlora]
  },
  {
    id: "21-rag",
    title: "RAG pipelines",
    track: "LLM Applications",
    level: "Intermediate",
    duration: "13 min",
    sequence: 22,
    technical:
      "Retrieval-Augmented Generation retrieves relevant external documents and conditions generation on retrieved context. Quality depends on chunking, embedding, retrieval, reranking, and answer grounding.",
    simple:
      "Model checks notes before answering instead of guessing from memory.",
    importance: "Improves factuality and freshness without retraining base LLM.",
    pitfall: "Ignoring retrieval quality while blaming generation model.",
    snippet: "Retriever quality is the first bottleneck in RAG.",
    formulas: [
      { name: "RAG factorization", latex: "p(y\\mid x)=\\sum_{z\\in\\mathcal{Z}}p_\\eta(z\\mid x)\\;p_\\theta(y\\mid x,z)" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="60" y="74" width="180" height="180" rx="16" fill="#edf8fa"/><rect x="280" y="74" width="180" height="180" rx="16" fill="#edf8fa"/><rect x="500" y="74" width="180" height="180" rx="16" fill="#fff1e3"/><rect x="720" y="74" width="120" height="180" rx="16" fill="#ffe2c7"/><text x="90" y="106" fill="#2c5564" font-size="24" font-family="Nunito" font-weight="800">Docs</text><text x="296" y="106" fill="#2c5564" font-size="24" font-family="Nunito" font-weight="800">Retrieve</text><text x="536" y="106" fill="#7a4f2d" font-size="24" font-family="Nunito" font-weight="800">Context</text><text x="736" y="106" fill="#7a4f2d" font-size="24" font-family="Nunito" font-weight="800">Answer</text><line x1="240" y1="165" x2="280" y2="165" stroke="#4a5c74" stroke-width="6"/><line x1="460" y1="165" x2="500" y2="165" stroke="#4a5c74" stroke-width="6"/><line x1="680" y1="165" x2="720" y2="165" stroke="#4a5c74" stroke-width="6"/></svg>`,
    visualCaption: "Retriever + generator chain in a grounded pipeline.",
    thoughtPrompts: [
      "How would you evaluate retrieval separately from generation?",
      "What chunk size might work for long policy documents?",
      "When should reranking be added?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "RAG is most useful when you need:",
          correct: "Grounded answers from external/up-to-date knowledge",
          distractors: ["Only GPU acceleration", "No documents", "Pure random creativity"],
          explanation: "RAG conditions output on retrieved evidence."
        }),
      () =>
        buildQuestion({
          prompt: "Weak RAG systems often fail first at:",
          correct: "Retrieval/chunking quality",
          distractors: ["Font size", "Prompt color", "Hardware fan speed"],
          explanation: "Poor retrieval means poor context for the generator."
        }),
      () =>
        buildQuestion({
          prompt: "Which stage improves ranked relevance after retrieval?",
          correct: "Reranking",
          distractors: ["Dropout", "Batch normalization", "Label smoothing"],
          explanation: "Reranking refines candidate context set."
        })
    ],
    sources: [REF.p_rag]
  },
  {
    id: "22-agentic",
    title: "Agentic AI systems",
    track: "LLM Applications",
    level: "Advanced",
    duration: "12 min",
    sequence: 23,
    technical:
      "Agentic systems perform iterative planning, tool use, and verification to solve multi-step goals. Safe deployment requires tool permission boundaries, failure handling, and stopping criteria.",
    simple:
      "Not one answer; it plans, acts, checks, and repeats.",
    importance: "Critical for reliable workflow automation.",
    pitfall: "Unbounded tool permissions and no guardrails.",
    snippet: "Observe -> plan -> act -> verify loop.",
    formulas: [
      { name: "Iterative policy", latex: "s_t\\rightarrow a_t\\rightarrow o_t\\rightarrow s_{t+1}" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><circle cx="450" cy="160" r="34" fill="#0d8f92"/><rect x="188" y="138" width="150" height="44" rx="12" fill="#ffe2c8"/><rect x="562" y="138" width="150" height="44" rx="12" fill="#ffe2c8"/><rect x="380" y="58" width="140" height="44" rx="12" fill="#d9eff2"/><rect x="380" y="218" width="140" height="44" rx="12" fill="#d9eff2"/><text x="223" y="166" fill="#7c4d27" font-size="22" font-family="Nunito" font-weight="800">Plan</text><text x="606" y="166" fill="#7c4d27" font-size="22" font-family="Nunito" font-weight="800">Act</text><text x="412" y="86" fill="#2a5562" font-size="22" font-family="Nunito" font-weight="800">Observe</text><text x="404" y="246" fill="#2a5562" font-size="22" font-family="Nunito" font-weight="800">Verify</text><line x1="338" y1="160" x2="416" y2="160" stroke="#495b73" stroke-width="5"/><line x1="484" y1="160" x2="562" y2="160" stroke="#495b73" stroke-width="5"/><line x1="450" y1="126" x2="450" y2="102" stroke="#495b73" stroke-width="5"/><line x1="450" y1="194" x2="450" y2="218" stroke="#495b73" stroke-width="5"/></svg>`,
    visualCaption: "Closed-loop tool-using agent behavior.",
    thoughtPrompts: [
      "What minimum tool permissions are sufficient for your use case?",
      "How would you stop infinite action loops?",
      "Which tasks should remain deterministic instead of agentic?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Central capability of an agentic system is:",
          correct: "Iterative tool-based execution with feedback",
          distractors: ["Single fixed response", "No memory across steps", "No safety policy"],
          explanation: "Agents operate over multi-step loops, not one-shot output."
        }),
      () =>
        buildQuestion({
          prompt: "Most important safety control for agents:",
          correct: "Explicit tool permission boundaries",
          distractors: ["Unlimited shell access", "No retries", "No logs"],
          explanation: "Bounded actions reduce operational risk."
        }),
      () =>
        buildQuestion({
          prompt: "Verification step in agents helps by:",
          correct: "Checking whether intermediate results satisfy goals",
          distractors: ["Removing need for prompts", "Eliminating retrieval", "Increasing token context only"],
          explanation: "Verification closes the loop on correctness."
        })
    ],
    sources: [REF.p_react]
  },
  {
    id: "23-monitoring",
    title: "Deployment monitoring and model health",
    track: "MLOps",
    level: "Intermediate",
    duration: "11 min",
    sequence: 24,
    technical:
      "Production reliability requires monitoring quality metrics, latency, failure rates, data drift, concept drift, and retraining triggers. Training metrics alone are insufficient after deployment.",
    simple:
      "A model in production is a living system that needs health checks.",
    importance: "Without monitoring, failures are silent and costly.",
    pitfall: "Tracking only one metric (accuracy) and ignoring drift/latency.",
    snippet: "Operational metrics + data metrics + model metrics.",
    formulas: [
      { name: "Precision", latex: "\\text{Precision}=\\frac{TP}{TP+FP}" },
      { name: "Recall", latex: "\\text{Recall}=\\frac{TP}{TP+FN}" },
      { name: "F1", latex: "F1=\\frac{2\\cdot Precision\\cdot Recall}{Precision+Recall}" }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="50" y="58" width="800" height="210" rx="16" fill="#f4fbff" stroke="#d8e7f2" stroke-width="3"/><line x1="90" y1="230" x2="810" y2="230" stroke="#7a8ba4" stroke-width="3"/><line x1="90" y1="88" x2="90" y2="230" stroke="#7a8ba4" stroke-width="3"/><polyline points="90,190 170,162 240,168 320,138 400,148 480,112 560,122 640,102 720,90 800,84" fill="none" stroke="#0d8f92" stroke-width="5"/><polyline points="90,208 170,205 240,197 320,202 400,194 480,198 560,188 640,196 720,186 800,192" fill="none" stroke="#ff9a5b" stroke-width="5"/></svg>`,
    visualCaption: "Post-deployment quality and drift tracking.",
    thoughtPrompts: [
      "How would you define a practical retraining trigger?",
      "Which metric matters most if false negatives are expensive?",
      "How do you detect concept drift vs data drift?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Why monitor drift after deployment?",
          correct: "Data distribution changes can degrade performance",
          distractors: ["To avoid all retraining", "Only to reduce model size", "Only for RL"],
          explanation: "Shifted inputs break assumptions learned at training time."
        }),
      () => {
        const tp = randomInt(40, 90);
        const fp = randomInt(5, 30);
        const p = (tp / (tp + fp)).toFixed(2);
        return buildQuestion({
          prompt: `If TP=${tp}, FP=${fp}, precision is approximately:`,
          correct: `${p}`,
          distractors: [`${(fp / (tp + fp)).toFixed(2)}`, `${((tp + fp) / tp).toFixed(2)}`, `${(tp / fp).toFixed(2)}`],
          explanation: "Precision is TP over predicted positives TP+FP."
        });
      },
      () =>
        buildQuestion({
          prompt: "Monitoring only training accuracy is risky because:",
          correct: "Production data and conditions can change",
          distractors: ["Accuracy is always enough", "Latency never matters", "Metrics are optional"],
          explanation: "Operational reality diverges from offline training setup."
        })
    ],
    sources: [REF.skl_metrics, REF.skl_pitfalls]
  },
  {
    id: "15a-unsupervised",
    title: "Unsupervised learning: clustering and PCA",
    track: "Unsupervised Learning",
    level: "Beginner",
    duration: "10 min",
    sequence: 15.5,
    technical:
      "Unsupervised learning works without labels. Clustering groups similar samples, and PCA compresses high-dimensional data into principal variance directions for visualization and preprocessing.",
    simple:
      "You sort items into natural groups even when nobody gives you answer labels first.",
    importance:
      "Useful when labels are expensive or unavailable, and for exploratory data analysis.",
    pitfall: "Treating discovered clusters as absolute ground truth without domain checks.",
    snippet:
      "Use unsupervised methods to discover structure first, then validate meaning with domain context.",
    formulas: [
      {
        name: "k-means objective",
        latex: "\\min_{\\{C_k,\\mu_k\\}}\\sum_{k=1}^{K}\\sum_{x_i\\in C_k}\\lVert x_i-\\mu_k\\rVert^2"
      },
      {
        name: "PCA projection",
        latex: "z = W^T(x-\\bar{x})"
      }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="60" y="58" width="360" height="210" rx="18" fill="#eef8ff" stroke="#d7e8f6" stroke-width="3"/><circle cx="150" cy="130" r="10" fill="#0d8f92"/><circle cx="190" cy="148" r="10" fill="#0d8f92"/><circle cx="174" cy="176" r="10" fill="#0d8f92"/><circle cx="304" cy="124" r="10" fill="#ff9a5b"/><circle cx="332" cy="148" r="10" fill="#ff9a5b"/><circle cx="316" cy="176" r="10" fill="#ff9a5b"/><text x="150" y="98" fill="#2b5262" font-size="24" font-family="Nunito" font-weight="800">Clustering</text><rect x="470" y="58" width="370" height="210" rx="18" fill="#fff4ea" stroke="#f3dcc6" stroke-width="3"/><line x1="520" y1="230" x2="790" y2="96" stroke="#0d8f92" stroke-width="6"/><line x1="520" y1="120" x2="760" y2="230" stroke="#8caecd" stroke-width="5"/><text x="602" y="98" fill="#7a4f2d" font-size="24" font-family="Nunito" font-weight="800">PCA axes</text></svg>`,
    visualCaption: "Group similar points and project data to key variance directions.",
    thoughtPrompts: [
      "How would you choose k for clustering in practice?",
      "What information do you lose when reducing dimensions?",
      "How would you validate cluster usefulness with business context?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "Unsupervised learning typically means:",
          correct: "Learning patterns without labeled targets",
          distractors: ["Learning only from rewards", "Learning with full answer keys", "Using only logistic regression"],
          explanation: "No explicit labels are given for target outputs."
        }),
      () =>
        buildQuestion({
          prompt: "PCA is mainly used to:",
          correct: "Reduce dimensionality while retaining major variance",
          distractors: ["Directly maximize classification accuracy", "Replace train/test split", "Generate text tokens"],
          explanation: "PCA finds principal directions in data."
        }),
      () =>
        buildQuestion({
          prompt: "k-means requires choosing what in advance?",
          correct: "Number of clusters K",
          distractors: ["Learning rate schedule", "Class priors", "Sequence length"],
          explanation: "Standard k-means needs predefined cluster count."
        })
    ],
    sources: [REF.cmu601]
  },
  {
    id: "15b-rl-core",
    title: "Reinforcement learning fundamentals",
    track: "Reinforcement Learning",
    level: "Intermediate",
    duration: "11 min",
    sequence: 15.6,
    technical:
      "Reinforcement learning optimizes sequential decision-making. An agent observes state, takes action, receives reward, and updates policy to maximize long-term return.",
    simple:
      "Like learning a game: try actions, score points, and gradually improve strategy.",
    importance:
      "Important for control, robotics, recommendation policies, and adaptive systems.",
    pitfall: "Optimizing immediate reward while harming long-term performance.",
    snippet:
      "RL is about delayed consequences, not just one-step prediction accuracy.",
    formulas: [
      {
        name: "Discounted return",
        latex: "G_t=\\sum_{k=0}^{\\infty}\\gamma^k r_{t+k+1}"
      },
      {
        name: "Bellman expectation",
        latex: "V^\\pi(s)=\\mathbb{E}_\\pi[r_{t+1}+\\gamma V^\\pi(s_{t+1})\\mid s_t=s]"
      }
    ],
    fallbackVisual: `<svg viewBox="0 0 900 320"><rect x="136" y="118" width="170" height="92" rx="18" fill="#dff3f5"/><rect x="368" y="42" width="170" height="92" rx="18" fill="#c7ecef"/><rect x="598" y="118" width="170" height="92" rx="18" fill="#ffd9bc"/><rect x="368" y="210" width="170" height="76" rx="18" fill="#ffe9d4"/><text x="188" y="172" fill="#2a5562" font-size="24" font-family="Nunito" font-weight="800">State</text><text x="418" y="96" fill="#2a5562" font-size="24" font-family="Nunito" font-weight="800">Action</text><text x="642" y="172" fill="#7a4c28" font-size="24" font-family="Nunito" font-weight="800">Reward</text><text x="388" y="254" fill="#7a4c28" font-size="22" font-family="Nunito" font-weight="800">Policy update</text><line x1="306" y1="162" x2="368" y2="90" stroke="#455771" stroke-width="6"/><line x1="538" y1="90" x2="598" y2="162" stroke="#455771" stroke-width="6"/><line x1="598" y1="162" x2="538" y2="246" stroke="#455771" stroke-width="6"/><line x1="368" y1="246" x2="306" y2="162" stroke="#455771" stroke-width="6"/></svg>`,
    visualCaption: "State-action-reward loop with policy improvement.",
    thoughtPrompts: [
      "Where do delayed rewards make learning difficult in real products?",
      "What risk appears when exploration is too low too early?",
      "How can poor reward design create unintended behavior?"
    ],
    quizTemplates: [
      () =>
        buildQuestion({
          prompt: "RL primarily optimizes:",
          correct: "Expected long-term cumulative reward",
          distractors: ["One-step classification accuracy only", "Cluster compactness only", "MSE on fixed labels only"],
          explanation: "RL focuses on sequential returns over time."
        }),
      () => {
        const gamma = pick([0.4, 0.7, 0.95]);
        const correct =
          gamma > 0.8
            ? "Future rewards are weighted strongly"
            : "Near-term rewards are weighted more";
        const wrong =
          gamma > 0.8
            ? "Only immediate reward matters"
            : "Future rewards dominate equally with no discount";
        return buildQuestion({
          prompt: `If discount factor gamma=${gamma}, then generally:`,
          correct,
          distractors: [wrong, "Discount factor has no effect", "State transitions become deterministic"],
          explanation: "Higher gamma emphasizes longer-term return."
        });
      },
      () =>
        buildQuestion({
          prompt: "Exploration in RL means:",
          correct: "Trying uncertain actions to gather information",
          distractors: ["Always picking current best action", "Ignoring rewards", "Skipping environment feedback"],
          explanation: "Exploration helps discover better policies."
        })
    ],
    sources: [REF.rl_book]
  }
];

const storageKey = "studybuddyai_progress_v1";
const today = new Date().toISOString().slice(0, 10);

const state = {
  track: "All",
  level: "All",
  search: "",
  lessonId: LESSONS[0].id,
  tutor: {
    question: "",
    answer: ""
  },
  quiz: {
    pack: [],
    index: 0,
    selected: null,
    checked: false,
    correctInPack: 0
  },
  ui: {
    showAllFormulas: false
  },
  progress: {
    completed: [],
    attempts: 0,
    correct: 0,
    points: 0,
    streak: 0,
    lastDate: ""
  }
};

const nodes = {
  trackTabs: document.getElementById("trackTabs"),
  levelSelect: document.getElementById("levelSelect"),
  searchInput: document.getElementById("searchInput"),
  trackHint: document.getElementById("trackHint"),
  resultsBanner: document.getElementById("resultsBanner"),
  lessonCountPill: document.getElementById("lessonCountPill"),
  lessonList: document.getElementById("lessonList"),
  lessonHeader: document.getElementById("lessonHeader"),
  technicalText: document.getElementById("technicalText"),
  simpleText: document.getElementById("simpleText"),
  importanceText: document.getElementById("importanceText"),
  pitfallText: document.getElementById("pitfallText"),
  snippetText: document.getElementById("snippetText"),
  formulaIntro: document.getElementById("formulaIntro"),
  formulaPrimary: document.getElementById("formulaPrimary"),
  formulaExtras: document.getElementById("formulaExtras"),
  toggleFormulaBtn: document.getElementById("toggleFormulaBtn"),
  visualSection: document.getElementById("visualSection"),
  visualCaption: document.getElementById("visualCaption"),
  visualCanvas: document.getElementById("visualCanvas"),
  imageCredit: document.getElementById("imageCredit"),
  thoughtText: document.getElementById("thoughtText"),
  flashcardText: document.getElementById("flashcardText"),
  quizProgressPill: document.getElementById("quizProgressPill"),
  quizQuestion: document.getElementById("quizQuestion"),
  quizChoices: document.getElementById("quizChoices"),
  quizFeedback: document.getElementById("quizFeedback"),
  tutorModePill: document.getElementById("tutorModePill"),
  tutorInput: document.getElementById("tutorInput"),
  explainLessonBtn: document.getElementById("explainLessonBtn"),
  reviewQuizBtn: document.getElementById("reviewQuizBtn"),
  sendTutorBtn: document.getElementById("sendTutorBtn"),
  tutorResponse: document.getElementById("tutorResponse"),
  tutorSources: document.getElementById("tutorSources"),
  sourceList: document.getElementById("sourceList"),
  completedMetric: document.getElementById("completedMetric"),
  accuracyMetric: document.getElementById("accuracyMetric"),
  streakMetric: document.getElementById("streakMetric"),
  pointsMetric: document.getElementById("pointsMetric"),
  startLearningBtn: document.getElementById("startLearningBtn"),
  randomLessonBtn: document.getElementById("randomLessonBtn"),
  newThoughtBtn: document.getElementById("newThoughtBtn"),
  newFlashBtn: document.getElementById("newFlashBtn"),
  checkAnswerBtn: document.getElementById("checkAnswerBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  newQuizPackBtn: document.getElementById("newQuizPackBtn"),
  markCompleteBtn: document.getElementById("markCompleteBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn")
};

function typesetMath(elements) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    if (window.MathJax.typesetClear) {
      window.MathJax.typesetClear(elements);
    }
    window.MathJax.typesetPromise(elements).catch(() => {});
  }
}

function renderRichText(node, text) {
  node.innerHTML = formatInlineMarkdown(text);
  typesetMath([node]);
}

function loadProgress() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    state.progress = { ...state.progress, ...parsed };
  } catch {
    localStorage.removeItem(storageKey);
  }
  if (state.progress.lastDate !== today) {
    state.progress.streak = 0;
  }
}

function saveProgress() {
  state.progress.lastDate = today;
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function resetProgress() {
  const confirmed = window.confirm(
    "This will clear all local lesson progress, quiz accuracy, streak, and points for this browser. Continue?"
  );
  if (!confirmed) {
    return;
  }
  localStorage.removeItem(storageKey);
  state.progress = {
    completed: [],
    attempts: 0,
    correct: 0,
    points: 0,
    streak: 0,
    lastDate: ""
  };
  updateMetrics();
  renderLessonList();
  renderHeader(getLessonById(state.lessonId));
  nodes.quizFeedback.textContent = "Progress reset complete.";
  nodes.quizFeedback.className = "quiz-feedback";
}

function getTracks() {
  const preferred = [
    "Foundations",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Deep Learning",
    "LLM Foundations",
    "LLM Applications",
    "MLOps"
  ];
  const present = new Set(LESSONS.map((lesson) => lesson.track));
  return ["All", ...preferred.filter((track) => present.has(track))];
}

function getLevels() {
  const preferred = ["Beginner", "Intermediate", "Advanced"];
  const present = new Set(LESSONS.map((lesson) => lesson.level));
  return ["All", ...preferred.filter((level) => present.has(level))];
}

function getFilteredLessons() {
  const q = state.search.trim().toLowerCase();
  return LESSONS.filter((lesson) => {
    const byTrack = state.track === "All" || lesson.track === state.track;
    const byLevel = state.level === "All" || lesson.level === state.level;
    const bySearch =
      !q ||
      `${lesson.title} ${lesson.technical} ${lesson.simple} ${lesson.track}`
        .toLowerCase()
        .includes(q);
    return byTrack && byLevel && bySearch;
  }).sort((a, b) => a.sequence - b.sequence);
}

function getLessonById(id) {
  return LESSONS.find((lesson) => lesson.id === id) || LESSONS[0];
}

const realWorldByTrack = {
  Foundations:
    "Use this when you need to decide how to learn from a new dataset before choosing any algorithm.",
  "Supervised Learning":
    "Think of email spam filtering, credit risk scoring, pricing, and demand forecasting where labels exist.",
  "Unsupervised Learning":
    "Think of customer segmentation, anomaly pattern discovery, and grouping unknown behavior clusters.",
  "Reinforcement Learning":
    "Think of recommendation loops, robotics control, and game-like trial-and-feedback systems.",
  "Deep Learning":
    "Think of image understanding, speech systems, and complex pattern extraction from raw data.",
  "LLM Foundations":
    "Think of assistants that read, summarize, reason, and generate text with context.",
  "LLM Applications":
    "Think of enterprise copilots that search knowledge bases and execute multistep tasks safely.",
  MLOps:
    "Think of production systems where model quality, latency, and drift must be monitored daily."
};

function buildSimpleNarrative(lesson) {
  const mapping = lesson.realWorld || realWorldByTrack[lesson.track] || "";
  return `${lesson.simple} In real projects, this maps to: ${mapping}`;
}

function buildFlashcard(lesson) {
  const cards = [
    `Core idea: ${lesson.snippet}`,
    `Plain-language check: ${lesson.simple}`,
    `Reality check: ${lesson.pitfall}`,
    `When to use it: ${lesson.realWorld || realWorldByTrack[lesson.track]}`
  ];
  return pick(cards);
}

function formulaContext(lesson) {
  return `Start with the first formula only. Expand only if you want deeper math for ${lesson.title.toLowerCase()}.`;
}

function buildFallbackVisual(lesson) {
  return `<svg viewBox="0 0 900 320"><rect x="50" y="52" width="800" height="216" rx="18" fill="#eef8fa" stroke="#d2e8eb" stroke-width="3"/><text x="86" y="128" fill="#2b5160" font-size="34" font-family="Nunito" font-weight="800">${lesson.title}</text><text x="86" y="176" fill="#45617a" font-size="24" font-family="Nunito">${lesson.visualCaption}</text><circle cx="760" cy="104" r="26" fill="#ffd5a7"/><rect x="736" y="138" width="48" height="72" rx="12" fill="#ff9a5b"/></svg>`;
}

function renderTrackTabs() {
  nodes.trackTabs.innerHTML = "";
  getTracks().forEach((track) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `track-tab${state.track === track ? " active" : ""}`;
    const count = LESSONS.filter((l) => track === "All" || l.track === track).length;
    button.textContent = `${track} (${count})`;
    button.addEventListener("click", () => {
      state.track = track;
      const filtered = getFilteredLessons();
      if (!filtered.some((l) => l.id === state.lessonId)) {
        state.lessonId = filtered[0] ? filtered[0].id : LESSONS[0].id;
      }
      renderAll();
      renderLessonDetail();
      nodes.resultsBanner.classList.remove("flash");
      void nodes.resultsBanner.offsetWidth;
      nodes.resultsBanner.classList.add("flash");
    });
    nodes.trackTabs.appendChild(button);
  });
}

function renderLevelSelect() {
  nodes.levelSelect.innerHTML = "";
  getLevels().forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    option.selected = level === state.level;
    nodes.levelSelect.appendChild(option);
  });
}

function renderResultsBanner(filtered) {
  const trackLabel = state.track === "All" ? "all tracks" : state.track;
  const levelLabel = state.level === "All" ? "all levels" : state.level;
  nodes.resultsBanner.textContent = `Showing ${filtered.length} lesson(s) in ${trackLabel}, ${levelLabel}.`;
  nodes.trackHint.textContent =
    state.track === "All"
      ? "Select a track. Lesson list updates immediately."
      : `Active track: ${state.track}. Lesson list updated.`;
  nodes.lessonCountPill.textContent = `${filtered.length} lessons`;
}

function renderLessonList() {
  const filtered = getFilteredLessons();

  if (!filtered.some((l) => l.id === state.lessonId)) {
    state.lessonId = filtered[0] ? filtered[0].id : LESSONS[0].id;
  }

  nodes.lessonList.innerHTML = "";
  if (!filtered.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = "No lessons match this filter.";
    nodes.lessonList.appendChild(p);
    renderResultsBanner(filtered);
    return;
  }

  filtered.forEach((lesson) => {
    const button = document.createElement("button");
    const active = lesson.id === state.lessonId;
    const done = state.progress.completed.includes(lesson.id);
    button.type = "button";
    button.className = `lesson-item${active ? " active" : ""}${done ? " done" : ""}`;
    button.innerHTML = `<div class="title"><strong>${lesson.sequence}. ${lesson.title}</strong></div><div class="meta">${lesson.track} | ${lesson.level} | ${lesson.duration}</div>`;
    button.addEventListener("click", () => {
      state.lessonId = lesson.id;
      renderLessonList();
      renderLessonDetail();
    });
    nodes.lessonList.appendChild(button);
  });

  renderResultsBanner(filtered);
}

function renderHeader(lesson) {
  const done = state.progress.completed.includes(lesson.id);
  nodes.lessonHeader.innerHTML = `
    <h2>${lesson.sequence}. ${lesson.title}</h2>
    <p class="muted" style="margin-top:6px;">${lesson.track}</p>
    <div class="lesson-tag-row">
      <span class="tag">${lesson.level}</span>
      <span class="tag">${lesson.duration}</span>
      <span class="tag">${done ? "Completed" : "In progress"}</span>
    </div>
  `;
}

function renderFormulas(lesson) {
  const formulas = lesson.formulas || [];
  const [primary, ...extras] = formulas;

  nodes.formulaIntro.textContent = formulaContext(lesson);
  nodes.formulaPrimary.innerHTML = "";
  nodes.formulaExtras.innerHTML = "";

  if (primary) {
    const div = document.createElement("div");
    div.className = "formula-item";
    div.innerHTML = `<strong>${primary.name}</strong><div class="math">\\[${primary.latex}\\]</div>`;
    nodes.formulaPrimary.appendChild(div);
  }

  extras.forEach((formula) => {
    const div = document.createElement("div");
    div.className = "formula-item";
    div.innerHTML = `<strong>${formula.name}</strong><div class="math">\\[${formula.latex}\\]</div>`;
    nodes.formulaExtras.appendChild(div);
  });

  const hasExtras = extras.length > 0;
  nodes.toggleFormulaBtn.style.display = hasExtras ? "inline-flex" : "none";
  state.ui.showAllFormulas = false;
  nodes.formulaExtras.classList.add("hidden");
  nodes.toggleFormulaBtn.textContent = "Show more formulas";

  typesetMath([nodes.formulaPrimary, nodes.formulaExtras]);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\s)([^*]+?)\*(?!\*)/g, "$1<em>$2</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function formatQuizText(text) {
  return formatInlineMarkdown(text)
    .replace(/\by_hat\b/g, "$\\hat{y}$")
    .replace(/\bx_hat\b/g, "$\\hat{x}$")
    .replace(/\b([A-Za-z])_([A-Za-z0-9]+)\b/g, (_, base, sub) => `$${base}_{${sub}}$`)
    .replace(/\b([A-Za-z])\^([A-Za-z0-9]+)\b/g, (_, base, exp) => `$${base}^{${exp}}$`);
}

function formatTutorText(text) {
  const normalized = text.replace(/\r/g, "").trim();
  if (!normalized) {
    return "<p>The tutor response will appear here.</p>";
  }

  const lines = normalized.split("\n");
  const parts = [];
  let paragraph = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    parts.push(`<p>${formatInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    parts.push(`<ul>${listItems.map((item) => `<li>${formatInlineMarkdown(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      flushParagraph();
      return;
    }

    if (line.startsWith("### ")) {
      flushList();
      flushParagraph();
      parts.push(`<h4>${escapeHtml(line.slice(4))}</h4>`);
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      flushParagraph();
      parts.push(`<h4>${escapeHtml(line.slice(3))}</h4>`);
      return;
    }

    if (line.startsWith("* ") || line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2).trim());
      return;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      listItems.push(line.replace(/^\d+\.\s+/, "").trim());
      return;
    }

    if (/^[A-Za-z][A-Za-z\s-]{2,35}:/.test(line)) {
      flushList();
      flushParagraph();
      const splitIndex = line.indexOf(":");
      const heading = line.slice(0, splitIndex);
      const rest = line.slice(splitIndex + 1).trim();
      parts.push(`<h4>${escapeHtml(heading)}</h4>`);
      if (rest) {
        parts.push(`<p>${formatInlineMarkdown(rest)}</p>`);
      }
      return;
    }

    paragraph.push(line);
  });

  flushList();
  flushParagraph();
  return parts.join("");
}

function renderVisual(lesson) {
  nodes.imageCredit.textContent = "";
  const generatedVisual = GENERATED_VISUALS[lesson.id]?.();
  const fallbackVisual = lesson.fallbackVisual;

  if (generatedVisual) {
    nodes.visualSection.style.display = "";
    nodes.visualCaption.textContent = lesson.visualCaption;
    nodes.visualCanvas.innerHTML = generatedVisual;
    nodes.imageCredit.textContent = "Generated visual: rendered locally for fast loading.";
    return;
  }

  if (fallbackVisual) {
    nodes.visualSection.style.display = "";
    nodes.visualCaption.textContent = lesson.visualCaption;
    nodes.visualCanvas.innerHTML = fallbackVisual;
    nodes.imageCredit.textContent = "Generated visual: rendered locally for fast loading.";
    return;
  }

  if (!lesson.visual || !lesson.visual.url) {
    nodes.visualSection.style.display = "none";
    nodes.visualCanvas.innerHTML = "";
    return;
  }

  nodes.visualSection.style.display = "";
  nodes.visualCaption.textContent = lesson.visualCaption;
  nodes.visualCanvas.innerHTML = `<img src="${lesson.visual.url}" alt="${lesson.visual.label}" loading="lazy" />`;
  nodes.imageCredit.innerHTML = `Reference image: <a href="${lesson.visual.source}" target="_blank" rel="noopener noreferrer">${lesson.visual.label}</a>`;

  const img = nodes.visualCanvas.querySelector("img");
  img.addEventListener("error", () => {
    nodes.visualSection.style.display = "none";
    nodes.visualCanvas.innerHTML = "";
    nodes.imageCredit.textContent = "";
  });
}

function renderThought(lesson) {
  nodes.thoughtText.textContent = pick(lesson.thoughtPrompts);
}

function renderFlashcard(lesson) {
  nodes.flashcardText.textContent = buildFlashcard(lesson);
}

function renderSources(lesson) {
  nodes.sourceList.innerHTML = "";
  lesson.sources.forEach((source) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`;
    nodes.sourceList.appendChild(li);
  });
}

function renderTutorSources(sources) {
  nodes.tutorSources.innerHTML = "";
  (sources || []).forEach((source) => {
    const li = document.createElement("li");
    li.textContent = `${source.title} (${source.track})`;
    nodes.tutorSources.appendChild(li);
  });
}

function renderTutorConversation() {
  if (!state.tutor.answer) {
    nodes.tutorResponse.innerHTML = `<p>The tutor response will appear here.</p>`;
    typesetMath([nodes.tutorResponse]);
    return;
  }

  const questionHtml = state.tutor.question
    ? `
      <article class="tutor-current-question">
        <div class="tutor-role">Current question</div>
        <div class="tutor-bubble tutor-question-bubble">
          <p>${formatInlineMarkdown(state.tutor.question)}</p>
        </div>
      </article>
    `
    : "";
  nodes.tutorResponse.innerHTML = `
    ${questionHtml}
    <article class="tutor-message assistant">
      <div class="tutor-role">Tutor answer</div>
      <div class="tutor-bubble">${formatTutorText(state.tutor.answer)}</div>
    </article>
  `;
  typesetMath([nodes.tutorResponse]);
}

function setTutorResponse(text, sources = [], question = state.tutor.question) {
  state.tutor.question = question || "";
  state.tutor.answer = text;
  renderTutorConversation();
  renderTutorSources(sources);
}

async function fetchTutorStatus() {
  try {
    const response = await fetch("/api/health");
    const data = await response.json();
    const label =
      data.mode === "langchain-rag"
        ? "AI mode: LangChain + OpenAI"
        : "AI mode: LangChain unavailable";
    nodes.tutorModePill.textContent = label;
    nodes.tutorModePill.title = data.message || "";
  } catch (error) {
    nodes.tutorModePill.textContent = "Backend offline";
    nodes.tutorModePill.title = "Run python3 server.py to enable the AI tutor backend.";
  }
}

async function postJsonWithTimeout(url, payload, timeoutMs = 30000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const data = await response.json();
    return { response, data };
  } finally {
    clearTimeout(timeout);
  }
}

async function askTutor(question) {
  const lesson = getLessonById(state.lessonId);
  state.tutor.question = question;
  state.tutor.answer = "Thinking...";
  renderTutorConversation();
  try {
    const { response, data } = await postJsonWithTimeout("/api/tutor", {
        question,
        lessonId: lesson.id,
        learnerLevel: lesson.level.toLowerCase(),
        history: []
      });
    if (!response.ok) {
      throw new Error(data.error || "Tutor request failed.");
    }
    setTutorResponse(data.answer, data.sources, question);
    fetchTutorStatus();
  } catch (error) {
    setTutorResponse(
      `The AI tutor request did not complete. If you are using LangChain + OpenAI, verify your API key and backend settings. Error: ${error.name === "AbortError" ? "Request timed out after 30 seconds." : error.message}`,
      [],
      question
    );
  }
}

async function reviewCurrentQuizAnswer() {
  const question = getCurrentQuestion();
  if (!question) {
    setTutorResponse("No quiz question is active yet.", []);
    return;
  }
  if (state.quiz.selected === null) {
    setTutorResponse("Choose a quiz answer first, then ask the tutor to review it.", []);
    return;
  }
  const lesson = getLessonById(state.lessonId);
  const learnerAnswer = question.choices[state.quiz.selected];
  const referenceAnswer = question.choices[question.answerIndex];
  setTutorResponse("Reviewing your answer...", [], question.prompt);

  try {
    const { response, data } = await postJsonWithTimeout("/api/review-answer", {
        question: question.prompt,
        learnerAnswer,
        referenceAnswer,
        lessonId: lesson.id
      });
    if (!response.ok) {
      throw new Error(data.error || "Answer review failed.");
    }
    setTutorResponse(data.answer, data.sources, question.prompt);
    fetchTutorStatus();
  } catch (error) {
    setTutorResponse(
      `The tutor could not review this answer right now. Error: ${error.name === "AbortError" ? "Request timed out after 30 seconds." : error.message}`,
      [],
      question.prompt
    );
  }
}

function buildQuizPack(lesson) {
  let inferredSize = lesson.level === "Beginner" ? 2 : 3;
  if (lesson.level === "Advanced" || lesson.formulas.length > 2) {
    inferredSize += 1;
  }
  inferredSize = Math.min(4, Math.max(1, inferredSize));
  const packSize = lesson.quizCount || inferredSize;
  const pack = [];
  for (let i = 0; i < packSize; i += 1) {
    pack.push(pick(lesson.quizTemplates)());
  }
  state.quiz.pack = pack;
  state.quiz.index = 0;
  state.quiz.selected = null;
  state.quiz.checked = false;
  state.quiz.correctInPack = 0;
}

function getCurrentQuestion() {
  return state.quiz.pack[state.quiz.index];
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    return;
  }
  nodes.quizQuestion.innerHTML = formatQuizText(q.prompt);
  nodes.quizProgressPill.textContent = `Q ${state.quiz.index + 1}/${state.quiz.pack.length}`;
  nodes.quizFeedback.textContent = "";
  nodes.quizFeedback.className = "quiz-feedback";
  nodes.checkAnswerBtn.disabled = true;
  nodes.nextQuestionBtn.disabled = true;
  state.quiz.selected = null;
  state.quiz.checked = false;

  nodes.quizChoices.innerHTML = "";
  q.choices.forEach((choice, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = formatQuizText(choice);
    button.addEventListener("click", () => {
      if (state.quiz.checked) {
        return;
      }
      state.quiz.selected = idx;
      nodes.checkAnswerBtn.disabled = false;
      [...nodes.quizChoices.children].forEach((n) => n.classList.remove("selected"));
      button.classList.add("selected");
    });
    nodes.quizChoices.appendChild(button);
  });
  typesetMath([nodes.quizQuestion, nodes.quizChoices]);
}

function checkAnswer() {
  const q = getCurrentQuestion();
  if (!q || state.quiz.selected === null || state.quiz.checked) {
    return;
  }
  state.quiz.checked = true;
  state.progress.attempts += 1;

  const correct = state.quiz.selected === q.answerIndex;
  [...nodes.quizChoices.children].forEach((node, idx) => {
    node.classList.remove("selected");
    if (idx === q.answerIndex) {
      node.classList.add("correct");
    }
    if (!correct && idx === state.quiz.selected) {
      node.classList.add("wrong");
    }
  });

  if (correct) {
    state.progress.correct += 1;
    state.progress.points += q.points;
    state.progress.streak += 1;
    state.quiz.correctInPack += 1;
    nodes.quizFeedback.innerHTML = formatQuizText(`Correct. ${q.explanation}`);
    nodes.quizFeedback.className = "quiz-feedback good";
  } else {
    state.progress.streak = 0;
    const ans = q.choices[q.answerIndex];
    nodes.quizFeedback.innerHTML = formatQuizText(`Not correct. Right answer: ${ans}. ${q.explanation}`);
    nodes.quizFeedback.className = "quiz-feedback bad";
  }

  const lastQuestion = state.quiz.index === state.quiz.pack.length - 1;
  nodes.nextQuestionBtn.disabled = !lastQuestion ? false : true;

  if (lastQuestion) {
    const score = `${state.quiz.correctInPack}/${state.quiz.pack.length}`;
    nodes.quizFeedback.innerHTML += ` ${formatQuizText(`Quiz pack complete: ${score}. Click "New dynamic quiz pack" for a fresh set.`)}`;
  }

  typesetMath([nodes.quizFeedback]);
  saveProgress();
  updateMetrics();
}

function nextQuestion() {
  if (!state.quiz.checked) {
    return;
  }
  if (state.quiz.index >= state.quiz.pack.length - 1) {
    return;
  }
  state.quiz.index += 1;
  renderQuestion();
}

function renderLessonDetail() {
  const lesson = getLessonById(state.lessonId);
  renderHeader(lesson);

  renderRichText(nodes.technicalText, lesson.technical);
  renderRichText(nodes.simpleText, buildSimpleNarrative(lesson));
  renderRichText(nodes.importanceText, lesson.importance);
  renderRichText(nodes.pitfallText, lesson.pitfall);
  renderRichText(nodes.snippetText, lesson.realWorld || realWorldByTrack[lesson.track] || lesson.snippet);

  renderFormulas(lesson);
  renderVisual(lesson);
  renderThought(lesson);
  renderFlashcard(lesson);
  renderSources(lesson);

  buildQuizPack(lesson);
  renderQuestion();
  nodes.tutorInput.value = "";
  state.tutor.question = "";
  state.tutor.answer = "";
  renderTutorConversation();
  renderTutorSources([]);
}

function updateMetrics() {
  const completed = state.progress.completed.length;
  const accuracy = state.progress.attempts
    ? Math.round((state.progress.correct / state.progress.attempts) * 100)
    : 0;

  nodes.completedMetric.textContent = `${completed}/${LESSONS.length}`;
  nodes.accuracyMetric.textContent = `${accuracy}%`;
  nodes.streakMetric.textContent = `${state.progress.streak}`;
  nodes.pointsMetric.textContent = `${state.progress.points}`;
}

function markComplete() {
  const lesson = getLessonById(state.lessonId);
  if (state.progress.completed.includes(lesson.id)) {
    nodes.quizFeedback.textContent = "Lesson already marked complete.";
    nodes.quizFeedback.className = "quiz-feedback";
    return;
  }
  state.progress.completed.push(lesson.id);
  state.progress.points += 2;
  nodes.quizFeedback.textContent = "Lesson completed. +2 points.";
  nodes.quizFeedback.className = "quiz-feedback good";
  saveProgress();
  updateMetrics();
  renderLessonList();
  renderHeader(lesson);
}

function startFromBeginning() {
  state.track = "Foundations";
  state.level = "All";
  state.search = "";
  nodes.searchInput.value = "";
  const first = [...LESSONS].sort((a, b) => a.sequence - b.sequence).find((l) => l.track === "Foundations");
  state.lessonId = first ? first.id : LESSONS[0].id;
  renderAll();
  renderLessonDetail();
  document.querySelector(".controls").scrollIntoView({ behavior: "smooth", block: "start" });
}

function randomLesson() {
  const lesson = pick(LESSONS);
  state.track = "All";
  state.level = "All";
  state.search = "";
  nodes.searchInput.value = "";
  state.lessonId = lesson.id;
  renderAll();
  renderLessonDetail();
}

function wireEvents() {
  nodes.levelSelect.addEventListener("change", (event) => {
    state.level = event.target.value;
    renderLessonList();
  });

  nodes.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderLessonList();
  });

  nodes.startLearningBtn.addEventListener("click", startFromBeginning);
  nodes.randomLessonBtn.addEventListener("click", randomLesson);
  nodes.newThoughtBtn.addEventListener("click", () => renderThought(getLessonById(state.lessonId)));
  nodes.newFlashBtn.addEventListener("click", () => renderFlashcard(getLessonById(state.lessonId)));
  nodes.explainLessonBtn.addEventListener("click", () => {
    const lesson = getLessonById(state.lessonId);
    const prompt = `Give me a short, beginner-friendly overview of ${lesson.title}.`;
    nodes.tutorInput.value = prompt;
    askTutor(prompt);
  });
  nodes.reviewQuizBtn.addEventListener("click", reviewCurrentQuizAnswer);
  nodes.sendTutorBtn.addEventListener("click", () => {
    const prompt = nodes.tutorInput.value.trim();
    if (!prompt) {
      setTutorResponse("Type a question for the tutor first.", []);
      return;
    }
    askTutor(prompt);
  });
  nodes.toggleFormulaBtn.addEventListener("click", () => {
    state.ui.showAllFormulas = !state.ui.showAllFormulas;
    nodes.formulaExtras.classList.toggle("hidden", !state.ui.showAllFormulas);
    nodes.toggleFormulaBtn.textContent = state.ui.showAllFormulas
      ? "Show fewer formulas"
      : "Show more formulas";
    typesetMath([nodes.formulaExtras]);
  });
  nodes.checkAnswerBtn.addEventListener("click", checkAnswer);
  nodes.nextQuestionBtn.addEventListener("click", nextQuestion);
  nodes.newQuizPackBtn.addEventListener("click", () => {
    buildQuizPack(getLessonById(state.lessonId));
    renderQuestion();
  });
  nodes.markCompleteBtn.addEventListener("click", markComplete);
  nodes.resetProgressBtn.addEventListener("click", resetProgress);
}

function renderAll() {
  renderTrackTabs();
  renderLevelSelect();
  renderLessonList();
  updateMetrics();
}

function init() {
  loadProgress();
  wireEvents();
  renderAll();
  renderLessonDetail();
  fetchTutorStatus();
}

init();
