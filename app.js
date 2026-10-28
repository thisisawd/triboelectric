const choice = (prompt, options, correct, explanation, multiple = false) => ({ type: multiple ? 'multiple' : 'choice', prompt, options, correct, explanation });
const written = (prompt, model, rubric) => ({ type: 'written', prompt, model, rubric });
const lessons = [
  {
    title: 'Who gains the electrons?', short: 'The triboelectric series', level: 3, group: 0, visual: 'series',
    original: 'A Styrofoam block is rubbed with a piece of wool. Using the Triboelectric series, what best describes the result of that action?',
    options: ['Only the Styrofoam ends up with a net positive charge.', 'Only the wool ends up with a net positive charge.', 'Both the wool and the Styrofoam end up with a net positive charge.'],
    explanation: 'Find both materials on your test’s series. Styrofoam is farther left, so it gains electrons from wool and becomes negative. Wool loses those electrons and becomes positive. The correct test choice is B.',
    takeaway: 'Negative charges are electrons. They transfer between the materials; rubbing does not create charge.',
    teaching: {
      intro: 'Static electricity starts with the balance between positive protons and negative electrons. A neutral object has equal amounts of each. Rubbing two different materials can transfer some electrons, upsetting that balance.',
      steps: ['Start neutral. Picture two objects with equal positive and negative charge. The protons are bound inside atomic nuclei; the transferable particles are electrons.', 'Compare the two positions on this test’s triboelectric series. Of the pair, the material farther left tends to gain electrons; the one farther right tends to lose them.', 'Follow the electrons, then name the signs. The receiver becomes negative. The donor becomes positive. The total charge of the isolated pair stays the same.'],
      example: 'Rub plastic with rabbit fur. Plastic is farther left, so electrons transfer from the fur to the plastic. Plastic ends negative and the fur ends positive. If three electrons transfer, one object gains three and the other loses exactly three.',
      think: 'If wool loses electrons, does it become more negative or more positive? Explain why before you look at the test question.'
    },
    practices: [
      choice('Rub a rubber rod with silk. Which outcome matches this series?', ['Rubber becomes negative; silk becomes positive.', 'Rubber becomes positive; silk becomes negative.', 'Both become negative.'], [0], 'Rubber is left of silk, so electrons transfer from silk to rubber.'),
      written('Explain what happens to the electrons when plastic is rubbed with wool. Name the final charge of each material.', 'Electrons transfer from wool to plastic. Plastic gains electrons and becomes negative; wool loses electrons and becomes positive.', ['Identify wool as the electron donor.', 'Explain that plastic gains electrons, becoming negative.', 'Explain that wool loses electrons, becoming positive.'])
    ]
  },
  {
    title: 'A positive charge means a loss', short: 'Hair meets wool', level: 3, group: 0, visual: 'series',
    original: 'When human hair is rubbed with wool, each object ends up with a predictable net charge. What will the net charge of the hair be?',
    options: ['Negative', 'Neutral', 'Positive'],
    explanation: 'Human hair sits to the right of wool. Hair loses electrons to wool, leaving it with more positive than negative charge. Hair becomes positive: choice C. Positive does not mean protons moved onto the hair.',
    takeaway: 'Losing negative electrons leaves a positive net charge.',
    teaching: {
      intro: 'A positive object is usually missing some electrons, not carrying extra protons. Think of net charge as a balance sheet: positive charge minus the magnitude of negative charge.',
      steps: ['Imagine a neutral model with ten positive charges and ten electrons. Its net charge is zero because the two totals balance.', 'Remove two electrons without moving the positive nuclei. There are now ten positives and eight negatives, leaving a net charge of plus two units.', 'Apply that idea to the series. The material farther right loses electrons to the material farther left. Losing negative charge makes its net charge positive.'],
      example: 'Silk lies to the right of paper on this chart. When rubbed together, silk tends to lose electrons and become positive. Paper gains the electrons and becomes negative. Neither material needs to gain or lose protons.',
      think: 'An object gains four electrons. Is that a positive change in its electron count, or a positive electric charge? Those are not the same thing.'
    },
    practices: [
      choice('Glass is rubbed with cotton. Complete the sentence: glass loses electrons and becomes ____.', ['negative', 'neutral', 'positive'], [2], 'Glass is right of cotton. It loses electrons, so it becomes positive.'),
      choice('True or false: hair becomes positive because it gains protons from wool.', ['True', 'False'], [1], 'False. Electrons leave the hair; protons stay in atomic nuclei.')
    ]
  },
  {
    title: 'Solve the mystery rod', short: 'Glass or acrylic?', level: 4, group: 0, visual: 'series',
    original: 'A student has a clear rod of unknown material. Describe how they can determine if the rod is made of glass or acryl using the Triboelectric series and the materials available in class (cotton, wool, tape, etc.). Be detailed and specific so there is no guessing needed!',
    explanation: 'Choose wool or cotton: each lies between acrylic and glass. Rub the unknown rod with wool. Acrylic gains electrons and becomes negative; glass loses electrons and becomes positive. Compare the rod with separate reference objects of known positive and negative charge. Repulsion identifies the same sign: repelled by negative means acrylic; repelled by positive means glass. Keep reference objects from touching the rod, and start with discharged samples for each trial.',
    takeaway: 'Attraction alone is not a reliable sign test: a neutral object can be attracted too. Use known charges and repulsion.',
    teaching: {
      intro: 'An identification experiment needs predictions that distinguish the two possibilities. Simply noticing “there is some attraction” is not enough: charged objects can attract neutral objects as well as opposite charges.',
      steps: ['Choose a rubbing material between the two candidates in the series. Cotton or wool works for acrylic versus glass. This makes the candidate rods acquire opposite signs under the same test.', 'Write the predictions before testing. Acrylic is left of cotton and wool, so it gains electrons. Glass is right of them, so it loses electrons.', 'Use separately prepared references with known charge signs. Bring each reference near without touching. Repulsion is the useful result because it identifies a matching sign. Reset the samples between trials.'],
      example: 'Suppose an unknown rod rubbed with wool repels a known positively charged reference. The rod must be positive, supporting glass. If it only attracts that reference, do not stop: test with a known negative reference and look for repulsion.',
      think: 'Why would rubbing both candidates with plastic be a weaker identification plan? Check where plastic sits relative to both rods.'
    },
    practices: [
      written('You rub an unknown glass-or-acrylic rod with cotton. Design a test with known charged references that identifies the rod without guessing.', 'After rubbing with cotton, acrylic is negative and glass is positive. Bring a known negative reference near without touching: repulsion identifies acrylic. Repulsion from a known positive reference identifies glass. Use fresh discharged samples and do not rely on attraction alone.', ['Choose cotton, which lies between acrylic and glass.', 'Predict acrylic negative and glass positive.', 'Use a known-sign reference and repulsion to identify the sign.', 'Avoid contact and explain why attraction alone is inconclusive.']),
      choice('After rubbing the unknown rod with wool, a known negative reference repels it. Which conclusion is supported?', ['The rod is acrylic.', 'The rod is glass.', 'The rod must be neutral.'], [0], 'Repulsion shows the rod is negative. Acrylic gains electrons from wool; glass would lose electrons.')
    ]
  },
  {
    title: 'The rubbed side matters', short: 'A balloon and a wall', level: 3, group: 1, visual: 'balloon',
    original: 'A balloon (considered an insulator) is rubbed with wool on one side. What do you predict will be true if the balloon is held up to the wall?',
    options: ['The balloon will stick to the wall, but only if the rubbed side is held up to the wall.', 'The balloon will stick to the wall, but only if the unrubbed side is held up to the wall.', 'The balloon will stick to the wall, no matter which side is held up to the wall.', 'The balloon will not stick to the wall because it will not be charged.'],
    explanation: 'In the test’s simplified model, excess electrons stay near the rubbed area because rubber is an insulator. Hold that charged side toward the wall to get the strongest attraction: choice A. The nearby wall polarizes even though it remains neutral overall. Real sticking also depends on humidity, distance, and how much charge is present.',
    takeaway: 'Insulators keep excess charge localized; conductors let it redistribute.',
    teaching: {
      intro: 'An insulator is not a material that “cannot be charged.” It is a material whose electrons do not move freely through the whole object. A rubber balloon can hold excess electrons close to where it was rubbed.',
      steps: ['Separate two ideas: getting charge onto an object and moving that charge around it. Rubbing transfers electrons onto the balloon, but insulation limits how far they spread.', 'Locate the charged patch. In the test’s model, rubbing only one side puts the excess electrons mainly on that side, rather than evenly around the balloon.', 'Bring the charged patch near a neutral wall. It slightly shifts charge within wall atoms. The resulting attraction is strongest with that patch facing the wall.'],
      example: 'Imagine charging one end of a plastic ruler. The other end does not automatically acquire the same excess charge. A metal ruler behaves differently because its mobile electrons can redistribute through the metal.',
      think: 'If you rotate the rubbed patch away from the wall, have the excess electrons disappeared, or have you changed their distance from the wall?'
    },
    practices: [
      choice('Only the left side of an insulating balloon is rubbed. In this model, which side should face the wall?', ['The rubbed left side.', 'Only the unrubbed right side.', 'Neither side, because insulators cannot hold charge.'], [0], 'The added electrons stay near the rubbed left side. Insulators can hold charge; it just does not flow freely.'),
      written('Why is “any side sticks equally well” not the best prediction for this balloon?', 'The balloon is an insulator. Excess charge stays near the rubbed patch rather than spreading freely over the balloon, so the rubbed side produces the strongest attraction to the polarized wall.', ['Name the balloon as an insulator.', 'Keep excess charge near the rubbed patch.', 'Connect that patch to the strongest wall attraction.'])
    ]
  },
  {
    title: 'A neutral wall can still attract', short: 'Model positive tape', level: 3, group: 1, visual: 'positive-wall',
    original: 'Draw a SIMPLE model that explains why a positively charged piece of tape attracts to a neutral wall. Show “Before Bringing Near” and “When Tape is Attracting to Wall.”',
    explanation: 'Before: draw positive tape next to a wall with equal total positive and negative charge. Near the tape: draw each wall atom’s negative electron cloud shifted slightly toward the tape, relative to its positive nucleus. The closer negative side attracts the tape more strongly than the farther positive side repels it. The wall is still neutral overall.',
    takeaway: 'Polarization rearranges charge within the wall; it does not require electrons to jump from the tape to the wall.',
    teaching: {
      intro: 'Neutral means zero net charge, not “no charged particles.” A neutral wall contains positive nuclei and negative electron clouds. An outside charge can slightly distort their relative positions; this is polarization.',
      steps: ['Draw the before picture with balanced positive and negative charge in the wall. Mark the tape positive. Do not remove all electrons from the tape; positive means a deficit of electrons.', 'Draw the after picture with the wall’s electron clouds displaced slightly toward the tape. In an insulating wall, this is a small shift within bound atoms or molecules, not electrons flowing across the wall.', 'Compare distances. The nearer negative sides attract the positive tape more strongly than the farther positive sides repel it. Keep equal total positive and negative charge in the wall.'],
      example: 'A charged comb can attract tiny neutral paper scraps. The paper does not need to start with a net charge: polarization puts opposite charge slightly closer to the comb, creating a net attraction.',
      think: 'Can the wall remain neutral overall while its near surface has a partial negative character? Describe how both statements can be true.'
    },
    practices: [
      choice('Build the “after” model for positive tape near a neutral insulating wall. Select TWO features.', ['Negative electron clouds shift toward the tape.', 'The wall keeps equal total positive and negative charge.', 'The wall gains extra protons from the tape.', 'Electrons must jump across the air gap.'], [0, 1], 'Show negative clouds nearer the tape, but keep the wall neutral overall. No transfer across the gap is required.', true),
      written('Describe the before-and-after drawing you would make for positive tape near a neutral wall.', 'Before, the wall has equal positive and negative charge with no preferred orientation. After, electron clouds shift toward the positive tape relative to their nuclei. The wall remains neutral, but its nearer negative side attracts the tape.', ['Describe a neutral wall before the tape approaches.', 'Place the negative side of wall atoms nearer positive tape.', 'Keep total wall charge neutral and explain attraction.'])
    ]
  },
  {
    title: 'Explain what your model shows', short: 'Polarization, in words', level: 3, group: 1, visual: 'positive-wall',
    original: 'Choose ONE answer that aligns with the model that you drew in question 5.',
    options: ['Negative charges in the wall move toward the positively charged tape. This gives the wall a partial negative charge at the surface and the tape is attracted.', 'Negative charges in the wall move toward the positively charged tape. This gives the wall a partial positive charge at the surface and the tape is attracted.', 'Positive charges in the wall move away from the tape, producing attraction between objects.', 'The model shows negative charges transferring from the tape to the wall.'],
    explanation: 'Choice A matches the model. In an insulating wall, electrons shift slightly within bound atoms or molecules toward the positive tape. This gives the facing surface a partial negative character, not a net negative charge for the entire wall. The nuclei do not travel across the wall.',
    takeaway: '“Partial negative at the near surface” and “net negative for the whole wall” are different claims.',
    teaching: {
      intro: 'A scientific model and its explanation must tell the same story. For polarization, check three things in your words: which particles shift, which direction they shift, and whether the total charge changes.',
      steps: ['Identify the outside charge first. Positive tape attracts electrons, so the wall’s negative electron clouds shift slightly toward it.', 'Name the resulting near side correctly. More negative character near positive tape means a partial negative surface, not a partial positive one.', 'State what does not happen. The wall does not need to gain electrons across the air gap, and positive nuclei do not travel through the wall. Its total charge remains zero.'],
      example: '“Electrons shift toward a positive rod, leaving the nearby sides partially negative” matches an attraction diagram. “Electrons shift toward it, making the nearby sides positive” contradicts itself: electrons carry negative charge.',
      think: 'If a diagram shows the negative side of every wall atom facing positive tape, what direction should the electron-shift arrows point?'
    },
    practices: [
      choice('True or false: polarization makes the entire neutral wall acquire a net negative charge.', ['True', 'False'], [1], 'False. The wall’s charges shift slightly, but its total positive and negative charge stays balanced.'),
      choice('Which sentence explains attraction to positive tape?', ['Electron clouds shift toward the tape, making the nearby side partially negative.', 'Protons flow out of the wall.', 'The nearby side becomes partially positive and attracts positive tape.'], [0], 'The negative side is closer to the positive tape, producing a net attraction.')
    ]
  },
  {
    title: 'Follow the moving electrons', short: 'When conductors touch', level: 3, group: 1, visual: 'conductors',
    original: 'Objects A and B are both conductors. Which statement describes the movement of charge when the two objects touch? The model shows A with balanced charges and B with excess negatives.',
    options: ['Positive charges will move from B to A.', 'Negative charges will move from B to A.', 'Negative charges will move from A to B.', 'Positive charges will move from A to B.'],
    explanation: 'In the pictured model, A is neutral and B has excess electrons. When these similar conductors touch, electrons redistribute from B toward A: choice B. Their positive atomic nuclei stay in the material. Charge moves until the connected conductors reach the same electric potential.',
    takeaway: 'In these solid conductors, electrons move, not positive nuclei.',
    teaching: {
      intro: 'Metals contain mobile electrons that can redistribute through the material. Bringing a conductor near a charge can rearrange those electrons; touching two conductors also provides a path for electrons to move between them.',
      steps: ['Read each starting object separately. Equal positive and negative symbols mean neutral. Extra negative symbols mean excess electrons, not fewer atoms.', 'When similar isolated conductors touch, follow the mobile electrons. In this setup, the negative object supplies electrons to the initially neutral one.', 'Track the endpoint without moving protons. Charge redistributes until the connected objects reach the same electric potential. Equal final charges require identical conductors in a symmetric ideal setup.'],
      example: 'Two identical metal spheres begin at zero and minus six charge units. On touching, electrons redistribute from the negative sphere toward the neutral one. After separation, each has minus three units; the pair still totals minus six.',
      think: 'Does a neutral sphere contain electrons that can move, or does “neutral” mean there are no electrons inside it?'
    },
    practices: [
      choice('Two identical isolated metal spheres touch. A is neutral; B has extra electrons. Which way do electrons initially redistribute?', ['From B to A.', 'From A to B.', 'Protons move from B to A.'], [0], 'Excess electrons redistribute from negative B into neutral A.'),
      written('A neutral metal sphere touches an identical negatively charged sphere. Describe what moves and why.', 'Electrons move from the negatively charged sphere toward the neutral sphere and redistribute over the connected conductors. Positive nuclei remain in place. The pair keeps the same total charge.', ['Identify electrons as the moving charge.', 'Give the direction: negative sphere toward neutral sphere.', 'Keep nuclei fixed and total charge conserved.'])
    ]
  },
  {
    title: 'Zoom in on the wall atoms', short: 'Model a negative insulator', level: 4, group: 1, visual: 'negative-wall',
    original: 'A negatively charged insulator is attracted to a neutral wall. Draw a model using the atom to show the mechanism of this attraction, including the correct location of charges in the insulator and wall.',
    explanation: 'Draw excess electrons localized on the insulator. Draw wall atoms with positive nuclei and negative electron clouds. The negative insulator repels the wall’s electron clouds slightly away, leaving each atom’s positive side nearer the insulator. The closer positive sides attract more strongly than the farther negative sides repel. No net charge is added to the wall.',
    takeaway: 'Flip the object’s sign and the wall’s polarization flips too. The force can still be attractive.',
    teaching: {
      intro: 'An atom-level model explains why attraction does not require two objects with opposite net charges. A neutral atom contains a positive nucleus surrounded by a negative electron cloud that can shift slightly.',
      steps: ['Place the negative insulator beside the wall and draw extra electrons localized on it. Do not show its excess charge flowing freely throughout the insulating object.', 'Zoom into wall atoms. The nearby negative object repels their electron clouds slightly away from it. The nuclei remain bound in the material, with each atom’s positive side now relatively closer to the object.', 'Explain the net force using distance. Closer positive sides attract more strongly than farther negative sides repel. Count total wall charges to confirm the wall is still neutral.'],
      example: 'Compare positive tape and a negative rod near the same wall. Positive tape pulls electron clouds toward itself; the negative rod pushes them away. In both cases, the opposite-charge side ends up closer and attraction results.',
      think: 'What needs to reverse in your wall-atom drawing when you change the nearby object from positive to negative?'
    },
    practices: [
      choice('A negative plastic rod approaches a neutral wall without touching. Which atomic model is correct?', ['Wall electron clouds shift away; positive sides face the rod.', 'Wall electron clouds shift toward the rod; negative sides face it.', 'All wall protons leave their nuclei.'], [0], 'The negative rod repels electrons slightly away, leaving the positive sides of wall atoms closer.'),
      written('Describe an atom-level drawing showing why a negative insulator attracts a neutral wall.', 'Extra electrons remain localized on the insulator. Wall electron clouds shift slightly away from it, relative to the positive nuclei. The nearer positive sides attract the negative insulator. The wall stays neutral overall.', ['Show excess electrons localized on the insulator.', 'Shift wall electron clouds away, with positive sides nearer.', 'Explain attraction while keeping the wall neutral.'])
    ]
  },
  {
    title: 'What makes a conductor?', short: 'Choose the evidence', level: 3, group: 2, visual: 'materials',
    original: 'Select the TWO claims you agree with about conductors.',
    options: ['Conductors include materials such as glass and plastic.', 'Charges can be pushed from one end of the conductor to the other using a charged object.', 'Conductors include materials such as aluminum and copper.', 'Conductors can develop net (excess) charge on their surface only where rubbed.'],
    explanation: 'Choose B and C. Mobile electrons can redistribute through a conductor when another charge is nearby. Aluminum and copper are familiar conductors. Glass and plastic are typical insulators. Excess charge on a conductor is not restricted to the rubbed patch.',
    takeaway: 'Look for charge moving through the material, not simply the presence of charge.',
    teaching: {
      intro: 'Conductors and insulators both contain charged particles, and either can acquire excess charge. The important distinction is how readily electric charge can redistribute through the material.',
      steps: ['Use familiar examples. Copper and aluminum are typical conductors. Dry glass and plastic are typical insulators under ordinary classroom conditions.', 'Look for a response far from the original charged region. A nearby charged object can push or pull mobile electrons through a conductor without touching it.', 'Avoid the “only where rubbed” rule for metals. Excess charge can redistribute over an isolated conductor’s surface; its distribution depends on shape and nearby objects. Localized excess charge is more characteristic of an insulator.'],
      example: 'Bring a charged rod near one end of an isolated copper bar. Electrons redistribute along the bar, changing the charge distribution at its far end. With a plastic bar, electrons cannot move freely along the whole length.',
      think: 'Why is “this material can hold a charge” weaker evidence than “charge redistributes to its far end”?'
    },
    practices: [
      choice('Select TWO observations or examples that support conduction.', ['Charge redistributes to the far end of an isolated metal rod.', 'Copper allows electrons to move through it.', 'Excess charge stays only at a rubbed patch on plastic.', 'Glass is a typical metal conductor.'], [0, 1], 'Charge redistribution and copper’s mobile electrons support conduction. Localized charge on plastic supports insulation.', true),
      choice('Which is the best evidence that a material is a conductor?', ['It can hold any charge at all.', 'Charge can redistribute through it to a distant end.', 'It is transparent.'], [1], 'Both insulators and conductors can hold charge. Mobility through the material is the key distinction.')
    ]
  },
  {
    title: 'Use repulsion as evidence', short: 'The hand-held material', level: 3, group: 2, visual: 'materials',
    original: 'A piece of material is rubbed with wool. When you hold it in your hand, the rubbed material repels from a negatively charged piece of tape. What kind of material was rubbed?',
    options: ['A conductor', 'It cannot be determined from the information above.', 'An insulator'],
    explanation: 'The test expects C: an insulator. Repulsion from negative tape shows the rubbed area is negative. In the classroom model, a bare conductor held in your hand would let excess charge drain through your body to ground. An insulator keeps charge localized even while held. This conclusion assumes an effective path to ground; in real experiments, a person can be insulated from ground.',
    takeaway: 'Repulsion tells you the sign. Charge staying on a held object is the evidence for insulation in this setup.',
    teaching: {
      intro: 'This question combines two separate observations. Repulsion identifies a matching sign; retaining charge while held helps identify the material, but only with the test’s assumed connection to ground.',
      steps: ['Use the force first. Negative tape repels another negative object. A neutral object could be attracted by polarization, so attraction would not identify the same sign as confidently.', 'Consider the hand. A bare conductor connected through a person to ground can exchange electrons with the surroundings, reducing or removing its excess charge.', 'Contrast the insulator. Excess charge near a rubbed patch does not freely travel to the hand, so it can remain and repel the tape. State the grounding assumption rather than treating it as universal.'],
      example: 'A charged metal sphere on an insulating stand can retain charge. Touching it with an effectively grounded hand can discharge it. A charged patch on a plastic strip may remain even while another part of the strip is held.',
      think: 'Would a charged metal object always lose its charge if the person holding it were well insulated from ground? Why does that limit the conclusion?'
    },
    practices: [
      choice('A rubbed plastic strip still repels negative tape while held. In the test’s grounded-hand model, what is the best explanation?', ['It is an insulator retaining localized negative charge.', 'It is a conductor that gained protons.', 'Repulsion proves it is neutral.'], [0], 'Like charges repel. The strip retains excess electrons locally instead of draining them through the hand.'),
      written('Explain both pieces of evidence used in question 10. Include the grounding assumption.', 'Repulsion from negative tape shows the material is negatively charged. Retaining charge while held suggests an insulator, assuming a bare hand provides an effective path to ground that would discharge a conductor.', ['Use repulsion to infer negative charge.', 'Connect retained localized charge to insulation.', 'State the effective-grounding assumption.'])
    ]
  },
  {
    title: 'Count the total, then share', short: 'Charge after contact', level: 3, group: 2, visual: 'conductors',
    original: 'After the two conductors (Objects A and B) touch, what will the charge of both objects be? Use the charge-symbol model on the test: A has balanced charges and B has excess negatives.',
    options: ['Net neutral', 'Net positive', 'We cannot determine this from the model.', 'Net negative'],
    explanation: 'Count positive and negative symbols together before contact, rather than relying on handwritten marks. A is balanced; B has more negatives than positives, so the isolated pair has a net negative charge. When these similar conductors touch, excess electrons redistribute and both end negative: choice D. They do not become neutral just because they touch.',
    takeaway: 'Charge is conserved. Sharing a surplus of electrons cannot make that surplus disappear.',
    teaching: {
      intro: 'Before predicting the final charge, add the starting charges of the whole isolated system. Contact redistributes electrons; it does not erase the system’s net charge.',
      steps: ['Count the symbols on each object. Pair each positive with a negative to find the leftover net charge. Then combine the two objects’ leftovers.', 'Use conservation of charge. If the combined starting total is negative, the isolated pair must still have that same negative total after contact.', 'For identical spheres, share the total equally. For different shapes or sizes, do not assume equal amounts; connected conductors reach equal electric potential. This test’s similar-object model predicts a negative sign on both.'],
      example: 'Identical spheres starting at plus two and minus six units have a combined charge of minus four. After touching and separating, each has minus two. If they instead start at plus six and minus six, the total is zero and each ends neutral.',
      think: 'If a neutral object touches a negative one, what would have to happen to the extra electrons for both to become neutral? Is that path present in an isolated pair?'
    },
    practices: [
      choice('Two identical isolated spheres start with net charges of 0 and −8 units. After touching and separating, what is each sphere’s net charge?', ['−4 units each', '0 units each', '+4 units each'], [0], 'The total is −8 units. Identical spheres share equally in this ideal model, so each ends at −4.'),
      choice('Two identical isolated spheres have net charges of +4 and −4 units. After touching and separating, each is:', ['Positive', 'Negative', 'Neutral'], [2], 'The total is zero. Electrons redistribute until the identical spheres are each neutral. No charge is created or destroyed.')
    ]
  },
  {
    title: 'Turn an answer into an explanation', short: 'Claim, evidence, reasoning', level: 4, group: 2, visual: 'conductors',
    original: 'Explain your answer from question #11 using evidence you saw in class about conductors to back up your claim.',
    explanation: 'Use claim, evidence, and reasoning. Claim: both pictured conductors end negative. Model evidence: the pair starts with excess negatives overall. Class evidence: describe an observation you actually made showing charge redistribution through a conductor. Reasoning: mobile electrons share across the touching pair, while total charge is conserved. Touching is not the same as rubbing. Do not invent a class observation.',
    takeaway: 'A strong explanation connects a real observation to electron mobility and conservation of charge.',
    teaching: {
      intro: 'A claim gives the answer. Evidence says what you observed or counted. Reasoning explains why that evidence supports the claim using a scientific rule. All three are needed for a convincing explanation.',
      steps: ['Write a specific claim that answers question 11: both conductors end negative in the pictured isolated setup.', 'Choose relevant evidence. Count the model’s excess negatives and describe an actual class observation showing charge redistribution. If you cannot remember one, identify the observation you would look for instead of inventing a memory.', 'Connect evidence to the claim. Mobile electrons redistribute through touching conductors, and the total negative charge is conserved. Merely saying “conductors conduct” does not explain the final sign.'],
      example: 'For two identical spheres starting at zero and minus four: Claim—each ends negative. Evidence—the starting total is minus four, and an experiment can show charge reaching a conductor’s far end. Reasoning—mobile electrons redistribute, but isolation preserves the total charge.',
      think: 'Which sentence in your explanation is the observation, and which sentence explains it? If you cannot separate them, make the evidence more specific.'
    },
    practices: [
      written('Write a claim–evidence–reasoning explanation for question 11. Include your own class observation if you remember one; otherwise say what observation you would look for.', 'Claim: both conductors end negative. Evidence: the model has excess negatives overall. A relevant class observation would be a response at the far end of a conductor when charge is brought near the other end. Reasoning: electrons can redistribute through touching conductors, and their total negative charge is conserved. Replace the proposed observation with your actual class evidence when available.', ['State that both conductors end negative.', 'Use the model’s excess negatives as evidence.', 'Give an actual class observation, or clearly label a proposed observation.', 'Connect mobile electrons and conserved total charge to the claim.']),
      choice('Which reasoning best supports a negative final charge on both objects?', ['Touching creates new electrons.', 'Excess electrons redistribute, but the pair keeps its original net negative charge.', 'Positive nuclei flow out until both objects turn negative.'], [1], 'Conduction redistributes existing electrons. It does not create charge or move the positive nuclei through the material.')
    ]
  },
  {
    title: 'Let the tinsel tell you', short: 'Test an unknown material', level: 4, group: 2, visual: 'tinsel',
    original: 'An apparatus is made from an unknown material by attaching tinsel (small strips of metal) to its end. A charged Styrofoam plate is brought near the apparatus on the opposite end from the tinsel. Choose ALL the correct statements that best describe what you might see.',
    options: ['If the object is a conductor, the tinsel will raise up.', 'If the object is a conductor, the tinsel will stay down.', 'If the object is an insulator, the tinsel will raise up.', 'If the object is an insulator, the tinsel will stay down.'],
    explanation: 'In the intended isolated apparatus, choose A and D. With a conductor, the nearby plate redistributes mobile electrons through the apparatus. The tinsel strips acquire like charge and repel, rising apart. With an insulator, charge does not travel freely to the far end, so the tinsel stays down. A grounded, damp, or poorly connected apparatus can behave differently.',
    takeaway: 'A response at the far end is evidence that charge can redistribute through the material.',
    teaching: {
      intro: 'The tinsel acts as an indicator of charge redistribution. Each strip is metal, so it can gain a charge imbalance. Strips with the same sign repel one another and spread apart.',
      steps: ['Keep the charged plate near one end without touching. If the apparatus conducts, the plate’s electric influence redistributes mobile electrons through the apparatus to its far end.', 'Predict the tinsel response. The separated strips at that end acquire like charge, so they repel and rise apart. The whole apparatus can remain neutral overall while opposite ends have different charge imbalances.', 'Compare an insulator. Charge does not flow freely down its length, so the far-end tinsel stays down in the intended model. Check isolation, dry conditions, and good metal contact before drawing a conclusion from no movement.'],
      example: 'A negative plate near one end of an isolated conducting rod pushes electrons toward the far end. Both tinsel strips there become negative and repel. A positive plate can also make them spread, but the far-end electron deficit makes the strips positive instead.',
      think: 'Does raised tinsel prove the plate touched the apparatus? Explain how charge redistribution can happen without contact.'
    },
    practices: [
      choice('A charged plate approaches one end of an isolated test rod. Select TWO expected results.', ['Conducting rod: far-end tinsel spreads apart.', 'Conducting rod: charge cannot redistribute.', 'Insulating rod: far-end tinsel stays down.', 'Insulating rod: electrons flow freely along its length.'], [0, 2], 'A conductor lets charge redistribute to the far end; an insulator does not. Like-charged tinsel strips repel.', true),
      written('Tinsel at the far end rises apart when a charged plate approaches the other end. Explain the evidence and one experimental limitation.', 'The result supports conduction: mobile electrons redistribute through the apparatus, leaving the tinsel strips with like charge so they repel. The apparatus should be isolated with good electrical contact; grounding, moisture, or poor connections can change the result.', ['Identify the result as evidence for conduction.', 'Explain redistribution and like-charge repulsion in the tinsel.', 'Name a setup limitation such as grounding or poor contact.'])
    ]
  }
];

const groups = [
  { title: 'C.2-A · Charge transfer', target: 'Use the Triboelectric Series to predict whether an object gains or loses charge.' },
  { title: 'C.2-B · Charge models', target: 'Model the location and behavior of charge on insulators and conductors.' },
  { title: 'C.2-C · Use the evidence', target: 'Use evidence to justify whether an object is an insulator or conductor.' }
];
const materials = ['Plastic (like PVC)', 'Rubber', 'Styrofoam', 'Acrylic', 'Cotton', 'Paper', 'Silk', 'Wool', 'Human hair', 'Glass', 'Rabbit fur'];
const $ = (id) => document.getElementById(id);
const escapeHTML = (text) => String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const storageKey = 'charge-lab-progress-v1';
let current = 0;
let variants = Array(lessons.length).fill(0);
let completed = new Set();
const drafts = new Map();
let speech = null;
let speechChunks = [];
let speechIndex = 0;
let speechVersion = 0;
let recognition = null;
let micTimer = null;
let voiceVersion = 0;
let modelState = false;
let audioText = '';

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (saved && Array.isArray(saved.completed)) {
    completed = new Set(saved.completed.filter((n) => Number.isInteger(n) && n >= 0 && n < lessons.length));
    if (Number.isInteger(saved.current) && saved.current >= 0 && saved.current < lessons.length) current = saved.current;
  }
} catch {
  $('save-note').textContent = 'Browser storage is unavailable. You can still study; progress lasts for this visit.';
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ current, completed: [...completed] }));
  } catch {
    $('save-note').textContent = 'Progress could not be saved. You can still study during this visit.';
  }
}

function renderNavigation() {
  $('lesson-nav').innerHTML = groups.map((group, index) => `<section class="nav-group" aria-label="${escapeHTML(group.target)}"><h3>${escapeHTML(group.title)}</h3>${lessons.map((lesson, number) => lesson.group === index ? `<button type="button" class="nav-button${completed.has(number) ? ' completed' : ''}" data-lesson="${number}" ${number === current ? 'aria-current="step"' : ''} aria-label="Question ${number + 1}: ${escapeHTML(lesson.short)}${completed.has(number) ? ', completed' : ''}"><span class="nav-number">${number + 1}</span><span class="nav-label">${escapeHTML(lesson.short)}</span>${completed.has(number) ? '<span class="nav-done" aria-hidden="true">Done</span>' : ''}</button>` : '').join('')}</section>`).join('');
  $('progress').value = completed.size;
  $('progress').textContent = `${completed.size} of 13`;
  $('progress-count').textContent = `${completed.size} / 13`;
}

function rememberDraft() {
  const text = $('written-answer');
  const selected = [...document.querySelectorAll('input[name="answer"]:checked')].map((input) => input.value);
  drafts.set(`${current}-${variants[current]}`, text ? text.value : selected);
}

function renderLesson(moveFocus = false) {
  stopReading();
  stopMicrophone();
  modelState = false;
  const lesson = lessons[current];
  $('lesson-meta').textContent = `QUESTION ${current + 1} / 13 · ${groups[lesson.group].title}`;
  $('lesson-level').textContent = `Level ${lesson.level}`;
  $('lesson-title').textContent = lesson.title;
  $('explanation-content').innerHTML = `<p class="teaching-intro">${escapeHTML(lesson.teaching.intro)}</p><ol class="teaching-steps">${lesson.teaching.steps.map((step) => `<li>${escapeHTML(step)}</li>`).join('')}</ol><div class="worked-example"><h4>A worked example</h4><p>${escapeHTML(lesson.teaching.example)}</p></div><div class="think-prompt"><h4>Pause and think</h4><p>${escapeHTML(lesson.teaching.think)}</p></div><p class="takeaway"><strong>Remember:</strong> ${escapeHTML(lesson.takeaway)}</p>`;
  $('original-heading').textContent = `Connect it to question ${current + 1}`;
  $('original-content').innerHTML = `<p>${escapeHTML(lesson.original)}</p>${lesson.options ? `<ol class="original-options" type="A">${lesson.options.map((option) => `<li>${escapeHTML(option)}</li>`).join('')}</ol>` : ''}<p class="test-connection"><strong>Apply the lesson:</strong> ${escapeHTML(lesson.explanation)}</p>`;
  $('lesson-position').textContent = `${current + 1} of 13`;
  $('previous-button').disabled = current === 0;
  $('next-button').textContent = current === 12 ? 'Back to question 1' : 'Next lesson →';
  renderNavigation();
  renderVisual();
  renderPractice();
  saveProgress();
  if (moveFocus) {
    $('lesson').scrollIntoView({ block: 'start' });
    $('lesson-title').focus({ preventScroll: true });
  }
}

function renderVisual() {
  const kind = lessons[current].visual;
  const container = $('explore-content');
  if (kind === 'series') {
    container.innerHTML = `<div class="science-box"><div class="series-ends"><span>← Tend to gain electrons (negative)</span><span>Tend to lose electrons (positive) →</span></div><ol class="series" aria-label="Triboelectric series, from electron gaining to electron losing">${materials.map((material) => `<li>${escapeHTML(material)}</li>`).join('')}</ol><p class="helper">Use this test’s order. The series is a relative comparison between two materials, not a fixed charge for each material.</p><div class="sim-controls"><label for="material-a">Material A<select id="material-a">${materialOptions(current === 2 ? 3 : current === 1 ? 8 : 2)}</select></label><label for="material-b">Material B<select id="material-b">${materialOptions(7)}</select></label></div><p class="sim-result" id="series-result" role="status"></p></div>`;
    $('material-a').addEventListener('change', updateSeries);
    $('material-b').addEventListener('change', updateSeries);
    updateSeries();
  } else if (['positive-wall', 'negative-wall', 'balloon'].includes(kind)) {
    const positive = kind === 'positive-wall';
    const name = kind === 'balloon' ? 'Rubbed balloon patch' : positive ? 'Positive tape' : 'Negative insulator';
    container.innerHTML = `<div class="science-box"><p>Compare the wall before and after the charged object comes near. The atom drawing is schematic, not to scale.</p><button class="button" type="button" id="model-toggle">Bring the object near</button><div class="charge-model"><div class="charged-object">${name}<br /><span aria-hidden="true">${positive ? '+ + +' : '− − −'}</span><span class="model-caption">${positive ? 'Net positive' : 'Localized excess electrons'}</span></div><div class="wall"><strong>Neutral wall</strong><div class="atom-row" id="wall-atoms" aria-hidden="true"></div><p class="model-caption">Equal total positive and negative charge</p></div></div><p class="sim-result" id="model-result" role="status"></p></div>`;
    $('model-toggle').addEventListener('click', () => { modelState = !modelState; updateWall(positive); });
    updateWall(positive);
  } else if (kind === 'conductors') {
    container.innerHTML = `<div class="science-box"><p>This simplified numeric example uses <strong>identical, isolated</strong> spheres. It illustrates the same principle as the test’s charge-symbol drawings.</p><div class="conductor-pair"><div class="conductor"><strong>Sphere A</strong><span id="charge-a"></span></div><div class="conductor"><strong>Sphere B</strong><span id="charge-b"></span></div></div><button type="button" class="button" id="model-toggle">Touch the spheres</button><p class="sim-result" id="model-result" role="status"></p></div>`;
    $('model-toggle').addEventListener('click', () => { modelState = !modelState; updateConductors(); });
    updateConductors();
  } else {
    container.innerHTML = `<div class="science-box"><p>${kind === 'tinsel' ? 'An isolated rod has metal tinsel at its far end. Bring a charged plate near the opposite end without touching.' : 'Compare how charge behaves in a conductor and an insulator.'}</p><div class="sim-controls"><label for="material-type">Test material<select id="material-type"><option value="conductor">Conductor · copper</option><option value="insulator">Insulator · plastic</option></select></label></div><button type="button" class="button" id="model-toggle">Bring a charged object near</button><p class="sim-result" id="model-result" role="status"></p></div>`;
    $('material-type').addEventListener('change', updateMaterial);
    $('model-toggle').addEventListener('click', () => { modelState = !modelState; updateMaterial(); });
    updateMaterial();
  }
}

function materialOptions(selected) {
  return materials.map((material, index) => `<option value="${index}"${index === selected ? ' selected' : ''}>${escapeHTML(material)}</option>`).join('');
}

function updateSeries() {
  const a = Number($('material-a').value);
  const b = Number($('material-b').value);
  $('series-result').textContent = a === b ? 'Choose two different materials. This series does not predict a transfer direction for identical materials.' : `${materials[Math.max(a, b)]} loses electrons → ${materials[Math.min(a, b)]} gains electrons. Result: ${materials[a]} becomes ${a < b ? 'negative' : 'positive'}; ${materials[b]} becomes ${b < a ? 'negative' : 'positive'}.`;
}

function updateWall(positive) {
  const electron = '<span class="electron">−</span>';
  const nucleus = '<span class="nucleus">+</span>';
  $('wall-atoms').innerHTML = Array.from({ length: 3 }, () => `<span class="atom">${modelState ? positive ? electron + nucleus : nucleus + electron : nucleus + electron}</span>`).join('');
  $('model-toggle').textContent = modelState ? 'Move the object away' : 'Bring the object near';
  $('model-result').textContent = !modelState ? 'Before: no preferred polarization toward the object. Each wall atom has balanced positive and negative charge.' : positive ? 'Near positive tape: electron clouds shift toward the tape. The negative sides of wall atoms are closer, causing attraction. The wall remains neutral overall.' : 'Near a negative object: electron clouds shift away. The positive sides of wall atoms are closer, causing attraction. The wall remains neutral overall.';
  if (!modelState) $('wall-atoms').innerHTML = `<span class="atom">${nucleus}${electron}</span><span class="atom">${electron}${nucleus}</span><span class="atom">${nucleus}${electron}</span>`;
}

function updateConductors() {
  $('charge-a').textContent = modelState ? 'Net −4 units' : 'Net 0 · neutral';
  $('charge-b').textContent = modelState ? 'Net −4 units' : 'Net −8 units';
  $('model-toggle').textContent = modelState ? 'Reset the spheres' : 'Touch the spheres';
  $('model-result').textContent = modelState ? 'Electrons redistribute from B toward A. Both identical spheres end negative. Total: −8 units before and after. The test asks for the sign; equal sharing here assumes identical spheres.' : 'Before contact: B has excess electrons. A is neutral. The isolated pair has a total net charge of −8 units.';
}

function updateMaterial() {
  const conductor = $('material-type').value === 'conductor';
  $('model-toggle').textContent = modelState ? 'Move the charged object away' : 'Bring a charged object near';
  $('model-result').textContent = !modelState ? 'Before: the isolated test material is neutral, and the tinsel hangs down.' : conductor ? 'Conductor: mobile electrons redistribute through the material. Far-end tinsel strips get like charge, repel, and spread upward. No contact with the charged object is needed.' : 'Insulator: charges can shift within atoms locally, but do not flow freely to the far end. The far-end tinsel stays down in this model.';
}

function practice() { return lessons[current].practices[variants[current]]; }

function renderPractice() {
  stopMicrophone();
  const question = practice();
  const draft = drafts.get(`${current}-${variants[current]}`);
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('self-check').hidden = true;
  $('self-check').innerHTML = '';
  $('answer-error').textContent = '';
  $('check-button').textContent = question.type === 'written' ? 'Compare with a model answer' : 'Check my answer';
  $('format-tag').textContent = question.type === 'written' ? 'Explain it · type or speak' : question.type === 'multiple' ? 'Select all that apply' : question.options.length === 2 ? 'True or false' : 'Multiple choice';
  const prompt = `Practice ${current + 1} · ${question.prompt}`;
  if (question.type === 'written') {
    $('practice-content').innerHTML = `<p id="practice-prompt"><strong>${escapeHTML(prompt)}</strong></p><label class="answer-label" for="written-answer">Your explanation</label><textarea id="written-answer" aria-describedby="practice-prompt voice-help answer-error">${escapeHTML(typeof draft === 'string' ? draft : '')}</textarea>${voiceControls('Dictation adds text to your answer. You can edit it before comparing.')}`;
    $('written-answer').addEventListener('input', clearValidation);
  } else {
    $('practice-content').innerHTML = `<fieldset id="answer-group" aria-describedby="answer-error"><legend>${escapeHTML(prompt)}${question.type === 'multiple' ? ' Select all that apply.' : ''}</legend>${question.options.map((option, index) => `<label class="answer-choice" for="answer-${index}"><input id="answer-${index}" type="${question.type === 'multiple' ? 'checkbox' : 'radio'}" name="answer" value="${index}"${Array.isArray(draft) && draft.includes(String(index)) ? ' checked' : ''} /><span>${index + 1}. ${escapeHTML(option)}</span></label>`).join('')}</fieldset>${voiceControls('Say “option one” or “option two.” For multiple answers, say “option one and option three.” Review your choices before checking.')}`;
    $('answer-group').addEventListener('change', clearValidation);
  }
  setupMicrophone();
  buildAudioText();
}

function voiceControls(help) {
  return `<div class="voice-row"><button type="button" class="button" id="mic-button" aria-pressed="false" aria-describedby="voice-help">Use microphone</button><p class="helper" id="voice-help">${help}</p></div><p class="helper" id="voice-status" role="status"></p>`;
}

function setupMicrophone() {
  $('mic-button').addEventListener('click', startMicrophone);
  if (!(window.SpeechRecognition || window.webkitSpeechRecognition)) {
    $('mic-button').disabled = true;
    $('voice-status').textContent = 'Voice input is not supported in this browser. Use the controls, or try a browser with speech recognition such as Chrome or Edge.';
  } else if (!window.isSecureContext) {
    $('mic-button').disabled = true;
    $('voice-status').textContent = 'Microphone input needs HTTPS or localhost. Use the answer controls here, or use a secure preview.';
  } else {
    $('voice-status').textContent = 'Microphone permission is requested only when you press the button. Your browser may send audio to its speech service; this app does not record or store audio.';
  }
}

function clearValidation() {
  $('answer-error').textContent = '';
  const control = $('written-answer') || $('answer-group');
  control?.removeAttribute('aria-invalid');
  $('feedback').textContent = '';
  $('self-check').hidden = true;
  rememberDraft();
}

function checkAnswer(event) {
  event.preventDefault();
  stopMicrophone();
  const question = practice();
  rememberDraft();
  const selected = [...document.querySelectorAll('input[name="answer"]:checked')].map((input) => Number(input.value));
  const text = $('written-answer');
  if (text ? !text.value.trim() : selected.length === 0) {
    $('answer-error').textContent = text ? 'Add an explanation by typing or using the microphone, then compare it.' : 'Choose an answer before checking. You can change your choice and try again.';
    (text || $('answer-group')).setAttribute('aria-invalid', 'true');
    (text || $('answer-0')).focus();
    return;
  }
  clearValidation();
  const feedback = $('feedback');
  if (question.type === 'written') {
    feedback.textContent = `Model answer: ${question.model} This is a self-check, not an automatic grade. Compare the ideas, not the exact words.`;
    $('self-check').innerHTML = `<div class="rubric"><h4>Does your explanation include these ideas?</h4><ul>${question.rubric.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}</ul><button class="button primary" type="button" id="complete-button">I compared my answer</button></div>`;
    $('self-check').hidden = false;
    $('complete-button').addEventListener('click', () => {
      completeLesson();
      feedback.textContent = `Reflection complete. Your lesson progress has been updated. ${completed.size === lessons.length ? 'All 13 lessons complete! ' : ''}You can edit your explanation or try another format.`;
      $('self-check').hidden = true;
      $('check-button').focus();
    });
  } else {
    const correct = selected.length === question.correct.length && selected.every((index) => question.correct.includes(index));
    feedback.className = correct ? 'feedback' : 'feedback retry';
    feedback.textContent = `${correct ? 'You’ve got it!' : 'Not quite yet. Try again.'} ${question.explanation}`;
    if (correct) completeLesson();
  }
}

function completeLesson() {
  completed.add(current);
  renderNavigation();
  saveProgress();
  if (completed.size === lessons.length) $('feedback').textContent += ' All 13 lessons complete! You can revisit any question.';
}

function navigateTo(number) {
  rememberDraft();
  current = number;
  renderLesson(true);
}

function buildAudioText() {
  const lesson = lessons[current];
  const question = practice();
  audioText = `Question ${current + 1}. ${lesson.title}. Learning target: ${groups[lesson.group].target} Learn it step by step. ${lesson.teaching.intro} ${lesson.teaching.steps.map((step, index) => `Step ${index + 1}. ${step}`).join(' ')} A worked example. ${lesson.teaching.example} Pause and think. ${lesson.teaching.think} Remember. ${lesson.takeaway} See the science. ${$('explore-content').textContent} Connect it to your test. ${lesson.original} ${lesson.options ? lesson.options.map((option, i) => `${String.fromCharCode(65 + i)}. ${option}`).join(' ') : ''} Apply the lesson. ${lesson.explanation} Your turn. ${question.prompt} ${question.options ? question.options.map((option, i) => `Option ${i + 1}. ${option}`).join(' ') : 'Type or dictate your explanation, then compare with a model answer.'}`;
}

function stopReading() {
  speechVersion++;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  speech = null;
  $('pause-button').disabled = true;
  $('stop-button').disabled = true;
  $('pause-button').textContent = 'Pause';
  $('read-button').textContent = 'Read to me';
  $('audio-status').textContent = 'Listen to the question, explanation, and practice. Uses your browser’s read-aloud voice.';
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    $('read-button').disabled = true;
    $('audio-status').textContent = 'Read-aloud is unavailable in this browser. All lesson content is available as text.';
  }
}

function readLesson() {
  stopMicrophone();
  stopReading();
  buildAudioText();
  const version = speechVersion;
  speechChunks = audioText.match(/[^.!?]+[.!?]*/g) || [audioText];
  speechIndex = 0;
  $('pause-button').disabled = false;
  $('stop-button').disabled = false;
  $('read-button').textContent = 'Read again';
  $('audio-status').textContent = 'Reading aloud. You can pause or stop at any time.';
  speakChunk(version);
}

function speakChunk(version) {
  if (version !== speechVersion) return;
  if (speechIndex >= speechChunks.length) {
    stopReading();
    $('audio-status').textContent = 'Finished reading. Ready to try the practice question?';
    return;
  }
  speech = new window.SpeechSynthesisUtterance(speechChunks[speechIndex]);
  speech.lang = 'en-US';
  speech.rate = Number($('speech-rate').value);
  speech.onend = () => { if (version === speechVersion) { speechIndex++; speakChunk(version); } };
  speech.onerror = (event) => {
    if (version !== speechVersion || event.error === 'canceled' || event.error === 'interrupted') return;
    stopReading();
    $('audio-status').textContent = 'Read-aloud could not finish. Check your device sound or browser voice settings, then press Read to me to retry.';
  };
  try { window.speechSynthesis.speak(speech); } catch {
    stopReading();
    $('audio-status').textContent = 'The browser could not start a voice. Try Read to me again, or continue with the text.';
  }
}

function stopMicrophone() {
  voiceVersion++;
  clearTimeout(micTimer);
  if (recognition) {
    const active = recognition;
    recognition = null;
    try { active.abort(); } catch { /* The browser may already have ended this session. */ }
    if ($('voice-status')) $('voice-status').textContent = 'Microphone stopped. Your answer is preserved; edit it or retry.';
  }
  if ($('mic-button')) {
    $('mic-button').textContent = 'Use microphone';
    $('mic-button').setAttribute('aria-pressed', 'false');
  }
}

function startMicrophone() {
  if (recognition) { stopMicrophone(); return; }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition || !window.isSecureContext) return;
  stopReading();
  const input = $('written-answer');
  const version = ++voiceVersion;
  let received = false;
  let failed = false;
  recognition = new Recognition();
  const session = recognition;
  session.lang = 'en-US';
  session.continuous = false;
  session.interimResults = false;
  $('mic-button').textContent = 'Stop microphone';
  $('mic-button').setAttribute('aria-pressed', 'true');
  $('voice-status').textContent = 'Requesting microphone access. Allow permission in your browser, or stop and type instead.';
  session.onstart = () => {
    if (version === voiceVersion) $('voice-status').textContent = 'Listening… speak your explanation. Press Stop microphone to cancel.';
  };
  session.onresult = (event) => {
    if (version !== voiceVersion) return;
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(' ').trim();
    if (!transcript) return;
    received = true;
    // Keep edits made while recognition was running instead of overwriting them.
    if (input) {
      const prefix = input.value.trimEnd();
      input.value = `${prefix}${prefix ? ' ' : ''}${transcript}`;
      clearValidation();
      $('voice-status').textContent = 'Voice answer added. Review and edit the text before comparing.';
    } else {
      selectSpokenChoices(transcript);
    }
  };
  session.onerror = (event) => {
    if (version !== voiceVersion) return;
    failed = true;
    const messages = {
      'not-allowed': 'Microphone permission was denied. Allow microphone access in browser site settings, then retry, or type your answer.',
      'service-not-allowed': 'Your browser or device blocks speech recognition. Check its permissions or type your answer.',
      'audio-capture': 'No usable microphone was found. Connect a microphone and retry, or type your answer.',
      'no-speech': 'No speech was detected. Press Use microphone to retry, or type your answer.',
      network: 'The browser speech service could not connect. Check your connection and retry, or type your answer.',
      'language-not-supported': 'This speech service does not support English recognition. Try another browser or type your answer.',
      aborted: 'Microphone stopped. Your existing answer is preserved.'
    };
    $('voice-status').textContent = messages[event.error] || 'Voice input failed. Your answer is preserved. Retry the microphone or type instead.';
  };
  session.onend = () => {
    if (version !== voiceVersion) return;
    clearTimeout(micTimer);
    recognition = null;
    $('mic-button').textContent = 'Use microphone';
    $('mic-button').setAttribute('aria-pressed', 'false');
    if (!received && !failed) $('voice-status').textContent = 'No words were received. Try the microphone again or type your answer.';
  };
  try {
    session.start();
    micTimer = setTimeout(() => {
      if (version !== voiceVersion) return;
      stopMicrophone();
      $('voice-status').textContent = 'Voice input timed out after 45 seconds. Your answer is preserved. Retry or type to continue.';
    }, 45000);
  } catch {
    stopMicrophone();
    $('voice-status').textContent = 'The microphone could not start. Check browser permissions, retry, or type your answer.';
  }
}

function selectSpokenChoices(transcript) {
  const normalize = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '').trim();
  const tokens = { one: 0, two: 1, three: 2, four: 3, five: 4, a: 0, b: 1, c: 2, d: 3, e: 4 };
  const text = normalize(transcript);
  let indices = [...text.matchAll(/\b(?:option|answer|choice)\s+(one|two|three|four|five|[1-5]|[a-e])\b/g)].map((match) => tokens[match[1]] ?? Number(match[1]) - 1);
  if (!indices.length) {
    const exact = practice().options.findIndex((option) => normalize(option) === text);
    if (exact !== -1) indices = [exact];
  }
  indices = [...new Set(indices)].filter((index) => index >= 0 && index < practice().options.length);
  if (!indices.length || (practice().type === 'choice' && indices.length !== 1)) {
    $('voice-status').textContent = `Heard: “${transcript}”. No choices changed. Say an option number, such as “option one,” or select your answer using the controls.`;
    return;
  }
  for (const control of document.querySelectorAll('input[name="answer"]')) control.checked = indices.includes(Number(control.value));
  clearValidation();
  $('voice-status').textContent = `Heard: “${transcript}”. Selected ${indices.map((index) => `option ${index + 1}`).join(' and ')}. Review the choices, then check your answer.`;
}

$('lesson-nav').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lesson]');
  if (button) navigateTo(Number(button.dataset.lesson));
});
$('previous-button').addEventListener('click', () => navigateTo(Math.max(0, current - 1)));
$('next-button').addEventListener('click', () => navigateTo((current + 1) % lessons.length));
$('another-button').addEventListener('click', () => {
  rememberDraft();
  stopReading();
  variants[current] = (variants[current] + 1) % lessons[current].practices.length;
  renderPractice();
  ($('written-answer') || $('answer-0')).focus();
});
$('practice-form').addEventListener('submit', checkAnswer);
$('read-button').addEventListener('click', readLesson);
$('stop-button').addEventListener('click', () => {
  stopReading();
  $('audio-status').textContent = 'Read-aloud stopped.';
});
$('pause-button').addEventListener('click', () => {
  if (!speech) return;
  const resume = window.speechSynthesis.paused;
  if (resume) window.speechSynthesis.resume();
  else window.speechSynthesis.pause();
  $('pause-button').textContent = resume ? 'Pause' : 'Resume';
  $('audio-status').textContent = resume ? 'Reading aloud.' : 'Reading paused. Press Resume to continue.';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { stopReading(); stopMicrophone(); }
});
window.addEventListener('pagehide', () => { stopReading(); stopMicrophone(); });

// Development-only illustrative states do not change production permission or network handling.
const illustrativeStates = {
  'microphone-permission-denied': ['voice-status', 'Microphone permission was denied. Allow access in browser settings and retry, or type your answer.'],
  'microphone-network-error': ['voice-status', 'The speech service could not connect. Retry the microphone or type your answer.'],
  'microphone-timeout': ['voice-status', 'Voice input timed out. Retry the microphone or type your answer.'],
  'read-aloud-error': ['audio-status', 'Read-aloud is unavailable. Retry Read to me or use the lesson text.'],
  'progress-save-error': ['save-note', 'Progress could not be saved. You can still study during this visit.']
};
const illustrationTimers = new Map();
function showIllustrativeState(state) {
  if (!state || !illustrativeStates[state.id]) return;
  const [id, message] = illustrativeStates[state.id];
  clearTimeout(illustrationTimers.get(state.id));
  const target = $(id);
  if (!target) return;
  if (state.phase === 'inactive') {
    target.textContent = id === 'save-note' ? 'Progress stays in this browser.' : 'Ready to retry. Your answer is preserved.';
  } else if (state.phase === 'pending') {
    target.textContent = 'Loading… You can continue reading or typing.';
    if (state.timingMode === 'prototype') illustrationTimers.set(state.id, setTimeout(() => { target.textContent = message; }, Math.max(0, Number(state.delayMs) || 0)));
  } else if (state.phase === 'active') target.textContent = message;
}
window.addEventListener('vibe:error-state', (event) => showIllustrativeState(event.detail));
renderLesson();
const runtime = window.__vibeErrorStateRuntime;
for (const [phase, states] of [['active', runtime?.getActive?.()], ['pending', runtime?.getPending?.()]]) {
  for (const state of Array.isArray(states) ? states : states ? [states] : []) showIllustrativeState(typeof state === 'string' ? { id: state, phase } : { ...state, phase });
}
