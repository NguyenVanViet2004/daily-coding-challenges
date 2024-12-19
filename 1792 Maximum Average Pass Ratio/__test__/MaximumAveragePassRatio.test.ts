import { maxAverageRatio } from "../MaximumAveragePassRatio"

describe("1792 Maximum Average Pass Ratio", () => {
  it.each([
    [
      [
        [1, 2],
        [3, 5],
        [2, 2],
      ],
      2,
      0.78333,
    ],
    [
      [
        [2, 4],
        [3, 9],
        [4, 5],
        [2, 10],
      ],
      4,
      0.53485,
    ],
    [
      [
        [376, 562],
        [720, 904],
        [691, 795],
        [384, 756],
        [89, 450],
        [521, 680],
      ],
      5,
      0.6359,
    ],
    [
      [
        [583, 868],
        [783, 822],
        [65, 262],
        [121, 508],
        [461, 780],
        [484, 668],
      ],
      8,
      0.57472,
    ],
    [
      [
        [34845, 34845],
        [16, 16],
        [97724, 97724],
        [9062, 9062],
        [52395, 52395],
        [992, 992],
        [33168, 33168],
        [25161, 25161],
        [86112, 86112],
        [9638, 9638],
        [64223, 64223],
        [75056, 75056],
        [36159, 36159],
        [99651, 99651],
        [71934, 71934],
        [64572, 64572],
        [41782, 41782],
        [10107, 10107],
        [59440, 59440],
        [91371, 91371],
        [35843, 35843],
        [13675, 13675],
        [13125, 13125],
        [92995, 92995],
        [26645, 26645],
        [59219, 59219],
        [63284, 63284],
        [61530, 61530],
        [59701, 59701],
        [85011, 85011],
        [10471, 10471],
        [25300, 25300],
        [90217, 90217],
        [43772, 43772],
        [68664, 68664],
        [1231, 1231],
        [7638, 7638],
        [40098, 40098],
        [84652, 84652],
        [5940, 5940],
        [5236, 5236],
        [61633, 61633],
        [93427, 93427],
        [1705, 1705],
        [52312, 52312],
        [15729, 15729],
        [92764, 92764],
        [7320, 7320],
        [20908, 20908],
        [30955, 30955],
        [85694, 85694],
        [49130, 49130],
        [12160, 12160],
        [76760, 76760],
        [37398, 37398],
        [18042, 18042],
        [29581, 29581],
        [48935, 48935],
        [53727, 53727],
        [28046, 28046],
        [79767, 79767],
        [85312, 85312],
        [73890, 73890],
        [84797, 84797],
        [69151, 69151],
        [89898, 89898],
        [6826, 6826],
        [63884, 63884],
        [23188, 23188],
        [33456, 33456],
        [16481, 16481],
        [53695, 53695],
        [83512, 83512],
        [68762, 68762],
        [42596, 42596],
        [34203, 34203],
        [23038, 23038],
        [54717, 54717],
        [22836, 22836],
        [4975, 4975],
        [28163, 28163],
        [93255, 93255],
        [33946, 33946],
        [56709, 56709],
        [50430, 50430],
        [36988, 36988],
        [2054, 2054],
        [66925, 66925],
        [16871, 16871],
        [84649, 84649],
        [89500, 89500],
        [78228, 78228],
        [13216, 13216],
        [7592, 7592],
        [45424, 45424],
        [41760, 41760],
        [21262, 21262],
        [35525, 35525],
        [70794, 70794],
        [91703, 91703],
        [57790, 57790],
        [34764, 34764],
        [83696, 83696],
        [3169, 3169],
        [62315, 62315],
        [89139, 89139],
        [40873, 40873],
        [62533, 62533],
        [9985, 9985],
        [14753, 14753],
        [97473, 97473],
        [44898, 44898],
        [64150, 64150],
        [32407, 32407],
        [94989, 94989],
        [83233, 83233],
        [5701, 5701],
        [15394, 15394],
        [22384, 22384],
        [22246, 22246],
        [53902, 53902],
        [38272, 38272],
        [26950, 26950],
        [99193, 99193],
        [66550, 66550],
        [38402, 38402],
        [66939, 66939],
        [38814, 38814],
        [69873, 69873],
        [53907, 53907],
        [47338, 47338],
        [19558, 19558],
        [23813, 23813],
        [26165, 26165],
        [57734, 57734],
        [79342, 79342],
        [39926, 39926],
        [78519, 78519],
        [51063, 51063],
        [60557, 60557],
        [26356, 26356],
        [19904, 19904],
        [77843, 77843],
        [80674, 80674],
        [19889, 19889],
        [91480, 91480],
        [30746, 30746],
        [78478, 78478],
        [81419, 81419],
        [83411, 83411],
        [14604, 14604],
        [26198, 26198],
        [45024, 45024],
        [10025, 10025],
        [9281, 9281],
        [41631, 41631],
        [96091, 96091],
        [37265, 37265],
        [32786, 32786],
        [33686, 33686],
        [61884, 61884],
        [90825, 90825],
        [43734, 43734],
        [40195, 40195],
        [58361, 58361],
        [47748, 47748],
        [48001, 48001],
        [66328, 66328],
        [60584, 60584],
        [59298, 59298],
        [82273, 82273],
        [6682, 6682],
        [58791, 58791],
        [9080, 9080],
        [15464, 15464],
        [48745, 48745],
        [88310, 88310],
        [72193, 72193],
        [18546, 18546],
        [79090, 79090],
        [95235, 95235],
        [56294, 56294],
        [53726, 53726],
        [90973, 90973],
        [66851, 66851],
        [69311, 69311],
        [42720, 42720],
        [38520, 38520],
        [95888, 95888],
        [28518, 28518],
        [70753, 70753],
        [19366, 19366],
        [3121, 3121],
        [74808, 74808],
        [10799, 10799],
        [38806, 38806],
        [2599, 2599],
        [35981, 35981],
        [54959, 54959],
        [15228, 15228],
        [94768, 94768],
        [46314, 46314],
        [82351, 82351],
        [71225, 71225],
        [90926, 90926],
        [185, 185],
        [62805, 62805],
        [95723, 95723],
        [11434, 11434],
        [58602, 58602],
        [96122, 96122],
        [84519, 84519],
        [43704, 43704],
        [70066, 70066],
        [42624, 42624],
        [95536, 95536],
        [74073, 74073],
        [96608, 96608],
        [55183, 55183],
        [42550, 42550],
        [5076, 5076],
        [18911, 18911],
        [88306, 88306],
        [49776, 49776],
        [15170, 15170],
        [57240, 57240],
        [71737, 71737],
        [94293, 94293],
        [48320, 48320],
        [18325, 18325],
        [84392, 84392],
        [4480, 4480],
        [2619, 2619],
        [39833, 39833],
        [22894, 22894],
        [29910, 29910],
        [49495, 49495],
        [30413, 30413],
        [20797, 20797],
        [48556, 48556],
        [92353, 92353],
        [49891, 49891],
        [95773, 95773],
        [31154, 31154],
        [5779, 5779],
        [20223, 20223],
        [66241, 66241],
        [11859, 11859],
        [21473, 21473],
        [42201, 42201],
        [2606, 2606],
        [607, 607],
        [39976, 39976],
        [82120, 82120],
        [96287, 96287],
        [17658, 17658],
        [82070, 82070],
        [55706, 55706],
        [69189, 69189],
        [49822, 49822],
        [85784, 85784],
        [94190, 94190],
        [78062, 78062],
        [20233, 20233],
        [45454, 45454],
        [56825, 56825],
        [78687, 78687],
        [10033, 10033],
        [57943, 57943],
        [31426, 31426],
        [37519, 37519],
        [43931, 43931],
        [58566, 58566],
        [10190, 10190],
        [76734, 76734],
        [84895, 84895],
        [73106, 73106],
        [53484, 53484],
        [93916, 93916],
        [89237, 89237],
        [61427, 61427],
        [77877, 77877],
        [45438, 45438],
        [16572, 16572],
        [47459, 47459],
        [59382, 59382],
        [66358, 66358],
        [31605, 31605],
        [47571, 47571],
        [81568, 81568],
        [2445, 2445],
        [23764, 23764],
        [98910, 98910],
        [47542, 47542],
        [61718, 61718],
        [95821, 95821],
        [49271, 49271],
        [3995, 3995],
        [86497, 86497],
        [26367, 26367],
        [17555, 17555],
        [19938, 19938],
        [88435, 88435],
        [2078, 2078],
        [33155, 33155],
        [58739, 58739],
        [234, 234],
        [18642, 18642],
        [33766, 33766],
        [75224, 75224],
        [53856, 53856],
        [55957, 55957],
        [52429, 52429],
        [99445, 99445],
        [93272, 93272],
        [46950, 46950],
        [51891, 51891],
        [37949, 37949],
        [68006, 68006],
        [33465, 33465],
        [9924, 9924],
        [32439, 32439],
        [93256, 93256],
        [29909, 29909],
        [27834, 27834],
        [36888, 36888],
        [84371, 84371],
        [44550, 44550],
        [57179, 57179],
        [68633, 68633],
        [79387, 79387],
        [54626, 54626],
        [51653, 51653],
        [48018, 48018],
        [7116, 7116],
        [13277, 13277],
        [90666, 90666],
        [8649, 8649],
        [25015, 25015],
        [30542, 30542],
        [15764, 15764],
        [30206, 30206],
        [83472, 83472],
        [13862, 13862],
        [72308, 72308],
        [15625, 15625],
        [10866, 10866],
        [75367, 75367],
        [54645, 54645],
        [58644, 58644],
        [42416, 42416],
        [79068, 79068],
        [50488, 50488],
        [69013, 69013],
        [39054, 39054],
        [11652, 11652],
        [64429, 64429],
        [64773, 64773],
        [41372, 41372],
        [49105, 49105],
        [74842, 74842],
        [31091, 31091],
        [52914, 52914],
        [93488, 93488],
        [51527, 51527],
        [73416, 73416],
        [32067, 32067],
        [56073, 56073],
        [8797, 8797],
        [28898, 28898],
        [41404, 41404],
        [61259, 61259],
        [33731, 33731],
        [16376, 16376],
        [43964, 43964],
        [77519, 77519],
        [61228, 61228],
        [77378, 77378],
        [45679, 45679],
        [53988, 53988],
        [92912, 92912],
        [6439, 6439],
        [79184, 79184],
        [9491, 9491],
        [46117, 46117],
        [63101, 63101],
        [45640, 45640],
        [77653, 77653],
        [69715, 69715],
        [16683, 16683],
        [39152, 39152],
        [71110, 71110],
        [18086, 18086],
        [47830, 47830],
        [22726, 22726],
        [37745, 37745],
        [94444, 94444],
        [95128, 95128],
        [27547, 27547],
        [24390, 24390],
        [20023, 20023],
        [26806, 26806],
        [73912, 73912],
        [94199, 94199],
        [8217, 8217],
        [30307, 30307],
        [52218, 52218],
        [72022, 72022],
        [82151, 82151],
        [3237, 3237],
        [55255, 55255],
        [4692, 4692],
        [14935, 14935],
        [53172, 53172],
        [72482, 72482],
        [9431, 9431],
        [78982, 78982],
        [26252, 26252],
        [82926, 82926],
        [95448, 95448],
        [97149, 97149],
        [18459, 18459],
        [50653, 50653],
        [72284, 72284],
        [65884, 65884],
        [97325, 97325],
        [42563, 42563],
        [73241, 73241],
        [32314, 32314],
        [68064, 68064],
        [1287, 1287],
        [33441, 33441],
        [18160, 18160],
        [41066, 41066],
        [44556, 44556],
        [38843, 38843],
        [65526, 65526],
        [47723, 47723],
        [25906, 25906],
        [60146, 60146],
        [97029, 97029],
        [93236, 93236],
        [67535, 67535],
        [80832, 80832],
        [86687, 86687],
        [57426, 57426],
        [2214, 2214],
        [55619, 55619],
        [41952, 41952],
        [14269, 14269],
        [47783, 47783],
        [91930, 91930],
        [43766, 43766],
        [39063, 39063],
        [89838, 89838],
        [37584, 37584],
        [51142, 51142],
        [47810, 47810],
        [53987, 53987],
        [50650, 50650],
        [96005, 96005],
        [60977, 60977],
        [81871, 81871],
        [62008, 62008],
        [29040, 29040],
        [89217, 89217],
        [30989, 30989],
        [76, 76],
        [67568, 67568],
        [61573, 61573],
        [22201, 22201],
        [42349, 42349],
        [41903, 41903],
        [5526, 5526],
        [15954, 15954],
        [57776, 57776],
        [90376, 90376],
        [19647, 19647],
        [14608, 14608],
        [62549, 62549],
        [62050, 62050],
        [15666, 15666],
        [33074, 33074],
        [73017, 73017],
        [24933, 24933],
        [35621, 35621],
        [37245, 37245],
        [50409, 50409],
        [4405, 4405],
        [38611, 38611],
        [96880, 96880],
        [64256, 64256],
        [47966, 47966],
        [25789, 25789],
        [68791, 68791],
        [83464, 83464],
        [82764, 82764],
        [86402, 86402],
        [26937, 26937],
        [62385, 62385],
        [20211, 20211],
        [35456, 35456],
        [26886, 26886],
        [36930, 36930],
        [51568, 51568],
        [33842, 33842],
        [27625, 27625],
        [52521, 52521],
        [44050, 44050],
        [5109, 5109],
        [73074, 73074],
        [24095, 24095],
        [70036, 70036],
        [60256, 60256],
        [90267, 90267],
        [39515, 39515],
        [26814, 26814],
        [30108, 30108],
        [38957, 38957],
        [58118, 58118],
        [68471, 68471],
        [37724, 37724],
        [25639, 25639],
        [96862, 96862],
        [77805, 77805],
        [94368, 94368],
        [30543, 30543],
        [6210, 6210],
        [33159, 33159],
        [81828, 81828],
        [17874, 17874],
        [56343, 56343],
        [98913, 98913],
        [39691, 39691],
        [94964, 94964],
        [60241, 60241],
        [99, 99],
        [9202, 9202],
        [51192, 51192],
        [61470, 61470],
        [49468, 49468],
        [73589, 73589],
        [71830, 71830],
        [681, 681],
        [83495, 83495],
        [33194, 33194],
        [77272, 77272],
        [97502, 97502],
        [8699, 8699],
        [24252, 24252],
        [86059, 86059],
        [97823, 97823],
        [1313, 1313],
        [52980, 52980],
        [22487, 22487],
        [48990, 48990],
        [93875, 93875],
        [17325, 17325],
        [26965, 26965],
        [47977, 47977],
        [19144, 19144],
        [7797, 7797],
        [84496, 84496],
        [41860, 41860],
        [699, 699],
        [71297, 71297],
        [24557, 24557],
        [49011, 49011],
        [16281, 16281],
        [12639, 12639],
        [28547, 28547],
        [97655, 97655],
        [44131, 44131],
        [83815, 83815],
        [23229, 23229],
        [98977, 98977],
        [38351, 38351],
        [96972, 96972],
        [34134, 34134],
        [57337, 57337],
        [92097, 92097],
        [48615, 48615],
        [59974, 59974],
        [26080, 26080],
        [19637, 19637],
        [58722, 58722],
        [49969, 49969],
        [17227, 17227],
        [12380, 12380],
        [39662, 39662],
        [2065, 2065],
        [7707, 7707],
        [64766, 64766],
        [91031, 91031],
        [5120, 5120],
        [19946, 19946],
        [17976, 17976],
        [19039, 19039],
        [24733, 24733],
        [11562, 11562],
        [61138, 61138],
        [79868, 79868],
        [36096, 36096],
        [62042, 62042],
        [90898, 90898],
        [38237, 38237],
        [32306, 32306],
        [67289, 67289],
        [97713, 97713],
        [46718, 46718],
        [66898, 66898],
        [32986, 32986],
        [6862, 6862],
        [77870, 77870],
        [41779, 41779],
        [5577, 5577],
        [22021, 22021],
        [79837, 79837],
        [20959, 20959],
        [46208, 46208],
        [27917, 27917],
        [36646, 36646],
        [23554, 23554],
        [96412, 96412],
        [6593, 6593],
        [49136, 49136],
        [43196, 43196],
        [35687, 35687],
        [99488, 99488],
        [84609, 84609],
        [98394, 98394],
        [77950, 77950],
        [93539, 93539],
        [78779, 78779],
        [27405, 27405],
        [13931, 13931],
        [88293, 88293],
        [53193, 53193],
        [75408, 75408],
        [82495, 82495],
        [10076, 10076],
        [3806, 3806],
        [79215, 79215],
        [19698, 19698],
        [29674, 29674],
        [35208, 35208],
        [31696, 31696],
        [81321, 81321],
        [20242, 20242],
        [89884, 89884],
        [73666, 73666],
        [20622, 20622],
        [63818, 63818],
        [47132, 47132],
        [79650, 79650],
        [1618, 1618],
        [62171, 62171],
        [42415, 42415],
        [56961, 56961],
        [72099, 72099],
        [2215, 2215],
        [8433, 8433],
        [97171, 97171],
        [96252, 96252],
        [11949, 11949],
        [99788, 99788],
        [90597, 90597],
        [60010, 60010],
        [40477, 40477],
        [10563, 10563],
        [75315, 75315],
        [56003, 56003],
        [66998, 66998],
        [44087, 44087],
        [98795, 98795],
        [86863, 86863],
        [24617, 24617],
        [48889, 48889],
        [81512, 81512],
        [1621, 1621],
        [974, 974],
        [34443, 34443],
        [14397, 14397],
        [2288, 2288],
        [1750, 1750],
        [33918, 33918],
        [62373, 62373],
        [70100, 70100],
        [44880, 44880],
        [57437, 57437],
        [56364, 56364],
        [2258, 2258],
        [2866, 2866],
        [73561, 73561],
        [13218, 13218],
        [75230, 75230],
        [5942, 5942],
        [28391, 28391],
        [59299, 59299],
        [68355, 68355],
        [58708, 58708],
        [68175, 68175],
        [3988, 3988],
        [62912, 62912],
        [74316, 74316],
        [61515, 61515],
        [14669, 14669],
        [84880, 84880],
        [78446, 78446],
        [36136, 36136],
        [7080, 7080],
        [24253, 24253],
        [6290, 6290],
        [34342, 34342],
        [93664, 93664],
        [49705, 49705],
        [86589, 86589],
        [62560, 62560],
        [2063, 2063],
        [39345, 39345],
        [8610, 8610],
        [18764, 18764],
        [2734, 2734],
        [42576, 42576],
        [80229, 80229],
        [20926, 20926],
        [46806, 46806],
        [41466, 41466],
        [61992, 61992],
        [83278, 83278],
        [75065, 75065],
        [41753, 41753],
        [10913, 10913],
        [94997, 94997],
        [93300, 93300],
        [47270, 47270],
        [12114, 12114],
        [80354, 80354],
        [77808, 77808],
        [29273, 29273],
        [76413, 76413],
        [25817, 25817],
        [43296, 43296],
        [5647, 5647],
        [19816, 19816],
        [81563, 81563],
        [51318, 51318],
        [74332, 74332],
        [74, 74],
        [27250, 27250],
        [25552, 25552],
        [58695, 58695],
        [22453, 22453],
        [58985, 58985],
        [46836, 46836],
        [25657, 25657],
        [48826, 48826],
        [80031, 80031],
        [72537, 72537],
        [84544, 84544],
        [84391, 84391],
        [62387, 62387],
        [7084, 7084],
        [41669, 41669],
        [24282, 24282],
        [6771, 6771],
        [26788, 26788],
        [55388, 55388],
        [9878, 9878],
        [5845, 5845],
        [97092, 97092],
        [35158, 35158],
        [47012, 47012],
        [42443, 42443],
        [65927, 65927],
        [38812, 38812],
        [68263, 68263],
        [27201, 27201],
        [5749, 5749],
        [51036, 51036],
        [83885, 83885],
        [84855, 84855],
        [78318, 78318],
        [52512, 52512],
        [99571, 99571],
        [44646, 44646],
        [18268, 18268],
        [24131, 24131],
        [24343, 24343],
        [48351, 48351],
        [92785, 92785],
        [45897, 45897],
        [36973, 36973],
        [84107, 84107],
        [5573, 5573],
        [70170, 70170],
        [98353, 98353],
        [83164, 83164],
        [4711, 4711],
        [29087, 29087],
        [12422, 12422],
        [20473, 20473],
        [32374, 32374],
        [12795, 12795],
        [78566, 78566],
        [67186, 67186],
        [30563, 30563],
        [65662, 65662],
        [83814, 83814],
        [45023, 45023],
        [79733, 79733],
        [53765, 53765],
        [67341, 67341],
        [10531, 10531],
        [37964, 37964],
        [84039, 84039],
        [3730, 3730],
        [15638, 15638],
        [16484, 16484],
        [66841, 66841],
        [32838, 32838],
        [42849, 42849],
        [91579, 91579],
        [6551, 6551],
        [73321, 73321],
        [78841, 78841],
        [918, 918],
        [97192, 97192],
        [56819, 56819],
        [94295, 94295],
        [19109, 19109],
        [55470, 55470],
        [15835, 15835],
        [32232, 32232],
        [46414, 46414],
        [71647, 71647],
        [29003, 29003],
        [38139, 38139],
        [34631, 34631],
        [14857, 14857],
        [18421, 18421],
        [3354, 3354],
        [60969, 60969],
        [55263, 55263],
        [57133, 57133],
        [7662, 7662],
        [94850, 94850],
        [73064, 73064],
        [6939, 6939],
        [63935, 63935],
        [59142, 59142],
        [91066, 91066],
        [24171, 24171],
        [19510, 19510],
        [27885, 27885],
        [42481, 42481],
        [45413, 45413],
        [85219, 85219],
        [62515, 62515],
        [79335, 79335],
        [11306, 11306],
        [19940, 19940],
        [65247, 65247],
        [53970, 53970],
        [12999, 12999],
        [60000, 60000],
        [38552, 38552],
        [15050, 15050],
        [91030, 91030],
        [9978, 9978],
        [14707, 14707],
        [88991, 88991],
        [17426, 17426],
        [69730, 69730],
        [30132, 30132],
        [1650, 1650],
        [18290, 18290],
        [26084, 26084],
        [58043, 58043],
        [38950, 38950],
        [93745, 93745],
        [52981, 52981],
        [38304, 38304],
        [84628, 84628],
        [1302, 1302],
        [70335, 70335],
        [70846, 70846],
        [74053, 74053],
        [51688, 51688],
        [8301, 8301],
        [85380, 85380],
        [46421, 46421],
        [24145, 24145],
        [12465, 12465],
        [12470, 12470],
        [8698, 8698],
        [24913, 24913],
        [80918, 80918],
        [65600, 65600],
        [10952, 10952],
        [93543, 93543],
        [59970, 59970],
        [5851, 5851],
        [58448, 58448],
        [61694, 61694],
        [9132, 9132],
        [29978, 29978],
        [27905, 27905],
        [25807, 25807],
        [20858, 20858],
        [51911, 51911],
        [69309, 69309],
        [31529, 31529],
        [88546, 88546],
        [73851, 73851],
        [39275, 39275],
        [53564, 53564],
        [87433, 87433],
        [33415, 33415],
        [14185, 14185],
        [22633, 22633],
        [86659, 86659],
        [76674, 76674],
        [82673, 82673],
        [75426, 75426],
        [86871, 86871],
        [55839, 55839],
        [65346, 65346],
        [82621, 82621],
      ],
      100000,
      1.0,
    ],
  ])(
    "should return the correct max averageRatio for extraStudents = %p",
    (classes, extraStudents, expected) => {
      const result = maxAverageRatio(classes, extraStudents)
      expect(result).toBeCloseTo(expected, 5)
    }
  )
})