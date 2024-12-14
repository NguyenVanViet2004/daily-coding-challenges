import { continuousSubarrays } from "../ContinuousSubarrays";

describe('2762 Continuous Subarrays', () => {
    it.each([
        [[5,4,2,4], 8],
        [[1,2,3], 6],
        [[1,10], 2],
        [[31,30,31,32], 10],
        [[54,53,53,52,53,54,53,52], 36],
        [[1,42,41,42,41,41,40,39,38], 29],
        [[60,65,66,67,66,66,65,64,65,65,64], 44],
        [[1696,1697,1696,1695,1694,1694,1693,1693,1692,1692,1693,1692,1691,1690,1691,1691,1692,1693,1692,1693,1693,1693,1692,1691,1690,1691,1690,1691,1690,1689,1689,1688,1689,1690,1691,1690,1691,1691,1691,1692,1691,1692,1691,1690,1690,1691,1691,1692,1693,1692,1693,1692,1691,1690,1690,1691], 347],
        [
            [21602763,21602763,21602764,21602763,21602762,21602762,21602762,21602763,21602762,21602763,21602762,21602761,21602761,21602760,21602761,21602760,21602760,21602760,21602760,21602759,21602760,21602759,21602758,21602759,21602758,21602759,21602760,21602760,21602760,21602761,21602761,21602762,21602761,21602762,21602761,21602762,21602763,21602764,21602764,21602763,21602762,21602762,21602763,21602762,21602763,21602763,21602764,21602764,21602764,21602763,21602762,21602761,21602761,21602761,21602761,21602762,21602762,21602761,21602761,21602762,21602763,21602762,21602763,21602762,21602762,21602762,21602762,21602761,21602760,21602759,21602759,21602758,21602758,21602759,21602758,21602757,21602756,21602755,21602756,21602755,21602755,21602756,21602755,21602755,21602754,21602754,21602754,21602755,21602756,21602755,21602755,21602756,21602757,21602758,21602759,21602759,21602758,21602757,21602758,21602758,21602758,21602758,21602758,21602759,21602759,21602759,21602760,21602760,21602759,21602758,21602759,21602759,21602758,21602758,21602759,21602758,21602757,21602757,21602758,21602759,21602759]
            ,1098
        ],
        [
            [38011660,38011659,38011658,38011657,38011656,38011657,38011656,38011657,38011656,38011656,38011655,38011656,38011657,38011656,38011656,38011656,38011656,38011657,38011657,38011657,38011658,38011657,38011656,38011655,38011654,38011653,38011654,38011654,38011653,38011654,38011653,38011653,38011653,38011654,38011655,38011656,38011657,38011656,38011656,38011655,38011656,38011656,38011655,38011655,38011655,38011654,38011653,38011653,38011653,38011654,38011654,38011653,38011654,38011653,38011654,38011655,38011655,38011654,38011653,38011654,38011655,38011655,38011655,38011656,38011655,38011654,38011655,38011656,38011657,38011657,38011658,38011659,38011658,38011659,38011660,38011661,38011660,38011659,38011658,38011658,38011657,38011657,38011656,38011657,38011658,38011658,38011657,38011656,38011656,38011657,38011656,38011655,38011654,38011654,38011654,38011654,38011655,38011655,38011654,38011654,38011654,38011654,38011655,38011655,38011656,38011655,38011656,38011656,38011656,38011656,38011657,38011658,38011657,38011657,38011657,38011657,38011656,38011655,38011655,38011655,38011654,38011654,38011655,38011654,38011655,38011655,38011655,38011655,38011655,38011656,38011655,38011656,38011657,38011658,38011659,38011658,38011658,38011658,38011657,38011657,38011657,38011657,38011657,38011656,38011657,38011658,38011657,38011658,38011657,38011657,38011656,38011657,38011658,38011657,38011658,38011657,38011656,38011656,38011656,38011655,38011656,38011657,38011658,38011658,38011657,38011657,38011658,38011657,38011658,38011658,38011657,38011656,38011656,38011657,38011656,38011656,38011657,38011656,38011657,38011657,38011658,38011658,38011658,38011658,38011657,38011657,38011658,38011658,38011658,38011657,38011657,38011656,38011656,38011655,38011655,38011655,38011656,38011657,38011657,38011656,38011656,38011655,38011655,38011656,38011657,38011656,38011656,38011657,38011658,38011659,38011659,38011659,38011660,38011661,38011662,38011663,38011664,38011663,38011663,38011664,38011663,38011662,38011663,38011662,38011661,38011661,38011662,38011661,38011661,38011660,38011660,38011659,38011660,38011661,38011662,38011663,38011664,38011665,38011664,38011664,38011665,38011666,38011665,38011665,38011666,38011667,38011668,38011669,38011669,38011670,38011670,38011669,38011668,38011669,38011670,38011669,38011668,38011669,38011668,38011667,38011667,38011667,38011667,38011667,38011668,38011669,38011670,38011671,38011672,38011672,38011671,38011671,38011671,38011672,38011673,38011673,38011673,38011672,38011672,38011673,38011673,38011674,38011674,38011673,38011672,38011671,38011671,38011671,38011670,38011670,38011670,38011670,38011670,38011670,38011669,38011670,38011669,38011670,38011670,38011670,38011669,38011669,38011669,38011668,38011669,38011670,38011671,38011671,38011671,38011670,38011671,38011670,38011671,38011671,38011672,38011671,38011671,38011670,38011669,38011670,38011671,38011672,38011671,38011672,38011671,38011671,38011672,38011672,38011671,38011672,38011671,38011670,38011669,38011669,38011670,38011670,38011670,38011669,38011670,38011670,38011671,38011672,38011673,38011672,38011671,38011672,38011671,38011670,38011670,38011669,38011668,38011667,38011666,38011666,38011667,38011668,38011667,38011668,38011667,38011666,38011665,38011665,38011664,38011665,38011666,38011666,38011665,38011665,38011666,38011667,38011667,38011668,38011669,38011670,38011671,38011670,38011671,38011670,38011670,38011669,38011670,38011671,38011671,38011671,38011672,38011672,38011672,38011672,38011673,38011673,38011674,38011673,38011674,38011674,38011674,38011674,38011675,38011675,38011674,38011673,38011673,38011673,38011672,38011673,38011674,38011673,38011672,38011673,38011672,38011671,38011670,38011670,38011670,38011670,38011670,38011669,38011670,38011670,38011669,38011668,38011669,38011668,38011669,38011670,38011670,38011671,38011670,38011671,38011670,38011671,38011671,38011670,38011671,38011671,38011670,38011670,38011669,38011669,38011670,38011671,38011671,38011670,38011669,38011668,38011668,38011669,38011669,38011668,38011669,38011669,38011670,38011669,38011669,38011668,38011667,38011668,38011667,38011666,38011665,38011666,38011665,38011666,38011666,38011665,38011664,38011664,38011663,38011664,38011664,38011664,38011664,38011664,38011664,38011664,38011663,38011662,38011661,38011660,38011659,38011658,38011658,38011658,38011657,38011656,38011657,38011656,38011656,38011656,38011657,38011656,38011656,38011657,38011658,38011657,38011658,38011659,38011658,38011657,38011658,38011659,38011659,38011660,38011659,38011658,38011659,38011660,38011659,38011658,38011659,38011659,38011659,38011660,38011659,38011660,38011660,38011660,38011660,38011661,38011662,38011661,38011662,38011663,38011664,38011663,38011662,38011663,38011663,38011663,38011664,38011663,38011664,38011664,38011663,38011664,38011665,38011666,38011667,38011668,38011667,38011668,38011667,38011668,38011669,38011668,38011668,38011667,38011666,38011666,38011666,38011665,38011666,38011665,38011664,38011664,38011665,38011665,38011666,38011665,38011664,38011663,38011664,38011663,38011664,38011663,38011664,38011665,38011666,38011665,38011665,38011664,38011665,38011666,38011666,38011665,38011665,38011666,38011666,38011667,38011666,38011666,38011665,38011665,38011664,38011665,38011665,38011666,38011667,38011666,38011667,38011668,38011668,38011669,38011670,38011669,38011670,38011669,38011670,38011669,38011668,38011668,38011668,38011668,38011668,38011668,38011669,38011670,38011669,38011669,38011669,38011670,38011669,38011669,38011669,38011668,38011667,38011668,38011668,38011668,38011669,38011668,38011668,38011667,38011667,38011666,38011667,38011666,38011667,38011667,38011667,38011667,38011666,38011667,38011666,38011667,38011667,38011667,38011667,38011668,38011667,38011666,38011667,38011666,38011666,38011667,38011667,38011668,38011669,38011669,38011668,38011669,38011670,38011669,38011668,38011667,38011666,38011666,38011667,38011666,38011667,38011667,38011666,38011666,38011667,38011667,38011668,38011669,38011670,38011670,38011671,38011672,38011672,38011671,38011672,38011672,38011671,38011670,38011670,38011671,38011670,38011670,38011669,38011669,38011670,38011669,38011668,38011667,38011666,38011666,38011666,38011667,38011666,38011667,38011666,38011665,38011665,38011665,38011665,38011665,38011664,38011665,38011665,38011664,38011665,38011665,38011664,38011664,38011663,38011664,38011664,38011665,38011666,38011666,38011665,38011666,38011667,38011668,38011668,38011668,38011669,38011670,38011670,38011671,38011670,38011671,38011670,38011671,38011672,38011671,38011670,38011670,38011670,38011669,38011668,38011669,38011670,38011670,38011671,38011672,38011671,38011672,38011672,38011673,38011673,38011672,38011671,38011670,38011671,38011672,38011673,38011674,38011674,38011673,38011674,38011674,38011673,38011673,38011672,38011673,38011673,38011673,38011672,38011672,38011672,38011671,38011670,38011671,38011670,38011670,38011671,38011670,38011671,38011670,38011670,38011670,38011671,38011671,38011670,38011670,38011671,38011670,38011670,38011671,38011670,38011669,38011670,38011669,38011669,38011669,38011670,38011669,38011670,38011669,38011668,38011667,38011668,38011669,38011670,38011669,38011668,38011668,38011669,38011670,38011670,38011671,38011671,38011670,38011671,38011671,38011671,38011670,38011669,38011670,38011669,38011670,38011670,38011670,38011669,38011670,38011669,38011670,38011670,38011670,38011671,38011672,38011673,38011673,38011674,38011674,38011673,38011674,38011675,38011674,38011675,38011674,38011673,38011674,38011675,38011676,38011675,38011675,38011675,38011676,38011677,38011677,38011678,38011679,38011680,38011681,38011680,38011680,38011679,38011678,38011679,38011680,38011679,38011679,38011678,38011678,38011678,38011677,38011677,38011677,38011676,38011677,38011677,38011678,38011678,38011678,38011679,38011679,38011678,38011679,38011680,38011680,38011680,38011679,38011680,38011679,38011680,38011679,38011680,38011680,38011679,38011679,38011679,38011678,38011679,38011679,38011679,38011679,38011680,38011679,38011678,38011677,38011677,38011677,38011677,38011676,38011676,38011676,38011675,38011674,38011673,38011672,38011671,38011671,38011670,38011670,38011670,38011669,38011668,38011669,38011669,38011668,38011669,38011669,38011670,38011670,38011671,38011670,38011671,38011670,38011671,38011670,38011671,38011671,38011670,38011671,38011670,38011671,38011670,38011670,38011670,38011671,38011670,38011670,38011669,38011669,38011668,38011669,38011669,38011670,38011671,38011670,38011669,38011670,38011669,38011668,38011669,38011669,38011668,38011669,38011670,38011671,38011671,38011672,38011673,38011672,38011671,38011671,38011671,38011671,38011672,38011671,38011670,38011669,38011669,38011669,38011668,38011667,38011667,38011668,38011669,38011669,38011670,38011669,38011669,38011669,38011670,38011670,38011671,38011672,38011671,38011671,38011672,38011672,38011672,38011672,38011672,38011672,38011673,38011672,38011673,38011672,38011671,38011671,38011670,38011671,38011672,38011672,38011673,38011673,38011674,38011673,38011673,38011673,38011672,38011671,38011672,38011672,38011672,38011671,38011671,38011671,38011670,38011671,38011670,38011669,38011669,38011669,38011669,38011669,38011668,38011667,38011668,38011668,38011667,38011666,38011666,38011667,38011668,38011668,38011667,38011667,38011667,38011668,38011669,38011670,38011671,38011670,38011669,38011668,38011667,38011668,38011667,38011666,38011666,38011666,38011665,38011664,38011665,38011666,38011665,38011666,38011667,38011666,38011667,38011667,38011668,38011668,38011668,38011668,38011669,38011670,38011671,38011671,38011670,38011670,38011670,38011670,38011669,38011669,38011670,38011671,38011670,38011669,38011669,38011669,38011670,38011671,38011672,38011671,38011672,38011673,38011674,38011674,38011675,38011676,38011677,38011677,38011676,38011675,38011676,38011676,38011677,38011678,38011677,38011677,38011677,38011678,38011677,38011678,38011677,38011678,38011678,38011678,38011678,38011677,38011676,38011677,38011676,38011676,38011675,38011674,38011673,38011673,38011673,38011673,38011673,38011673,38011673,38011674,38011675,38011676,38011677,38011676,38011676,38011677,38011676,38011676,38011677,38011676,38011677,38011677,38011678,38011677,38011676,38011675,38011674,38011675,38011674,38011674,38011673,38011674,38011674,38011674,38011673,38011674,38011673,38011673,38011674,38011675,38011676,38011676,38011677,38011676,38011677,38011677,38011678,38011677,38011678,38011679,38011678,38011677,38011677,38011676,38011675,38011676,38011677,38011677,38011676,38011676,38011677,38011677,38011677,38011676,38011675,38011676,38011676,38011675,38011676,38011675,38011676,38011677,38011676,38011675,38011676,38011677,38011678,38011677,38011677,38011676,38011676,38011676,38011675,38011676,38011677,38011678,38011678,38011679,38011680,38011681,38011681,38011682,38011682,38011682,38011681,38011681,38011680,38011681,38011682,38011682,38011681,38011682,38011682,38011682,38011683,38011682,38011682,38011682,38011681,38011680,38011679,38011678,38011678,38011678,38011678,38011678,38011679,38011678,38011679,38011680,38011680,38011680,38011680,38011680,38011680,38011680,38011680,38011680,38011679,38011680,38011680,38011680,38011679,38011679,38011680,38011679,38011678,38011678,38011677,38011677,38011678,38011678,38011677,38011677,38011676,38011676,38011677,38011676,38011676,38011676,38011677,38011678,38011678,38011678,38011679,38011680,38011680,38011679,38011678,38011679,38011679,38011680,38011679,38011680,38011680,38011681,38011682,38011681,38011681,38011682,38011683,38011683,38011683,38011683,38011683,38011683,38011683,38011682,38011683,38011684,38011684,38011684,38011683,38011684,38011683,38011682,38011681,38011680,38011681,38011682,38011681,38011680,38011681,38011681,38011681,38011682,38011682,38011683,38011684,38011684,38011683,38011684,38011685,38011686,38011685,38011684,38011685,38011686,38011687,38011687,38011686,38011686,38011685,38011686,38011686,38011685,38011684,38011684,38011683,38011682,38011683,38011682,38011683,38011684,38011685,38011686,38011685,38011684,38011684,38011685,38011685,38011686,38011685,38011686,38011686,38011686,38011686,38011685,38011684,38011685,38011686,38011685,38011684,38011685,38011686,38011686,38011686,38011686,38011686,38011685,38011685,38011685,38011686,38011685,38011684,38011683,38011682,38011681,38011680,38011680,38011680,38011679,38011679,38011678,38011677,38011677,38011677,38011676,38011675,38011675,38011676,38011676,38011677,38011677,38011678,38011679,38011678,38011678,38011679,38011678,38011677,38011678,38011677,38011678,38011677,38011678,38011678,38011679,38011680,38011681,38011682,38011681,38011682,38011683,38011683,38011682,38011683,38011684,38011685,38011686,38011685,38011686,38011687,38011688,38011687,38011687,38011686,38011687,38011687,38011686,38011686,38011685,38011684,38011683,38011684,38011685,38011684,38011684,38011683,38011684,38011685,38011684,38011684,38011683,38011683,38011684,38011684,38011685,38011685,38011686,38011686,38011686,38011686,38011687,38011687,38011686,38011686,38011687,38011686,38011686,38011685,38011684,38011684,38011685,38011685,38011684,38011684,38011685,38011684,38011684,38011685,38011685,38011684,38011683,38011683,38011683,38011684,38011683,38011684,38011685,38011686,38011685,38011686,38011685,38011686,38011686,38011685,38011686,38011687,38011686,38011687,38011687,38011687,38011687,38011686,38011687,38011686,38011686,38011685,38011686,38011686,38011685,38011686,38011687,38011686,38011687,38011686,38011687,38011688,38011687,38011688,38011689,38011690,38011689,38011688,38011688,38011689,38011688,38011689,38011690,38011691,38011690,38011691,38011690,38011691,38011692,38011693,38011692,38011691,38011692,38011691,38011691,38011692,38011691,38011690,38011691,38011690,38011690,38011691,38011690,38011690,38011690,38011689,38011690,38011689,38011689,38011688,38011687,38011688,38011687,38011686,38011685,38011686,38011685,38011684,38011685,38011684,38011684,38011685,38011686,38011686,38011685,38011685,38011686,38011686,38011686,38011687,38011687,38011687,38011687,38011686,38011686,38011685,38011684,38011685,38011685,38011686,38011686,38011685,38011686,38011687,38011686,38011687,38011686,38011686,38011685,38011685,38011685,38011685,38011686,38011687,38011686,38011687,38011686,38011687,38011686,38011686,38011686,38011685,38011684,38011684,38011684,38011684,38011683,38011682,38011683,38011682,38011681,38011681,38011680,38011680,38011681,38011682,38011682,38011682,38011682,38011681,38011681,38011682,38011683,38011683,38011683,38011684,38011684,38011684,38011685,38011684,38011685,38011685,38011685,38011684,38011683,38011682,38011682,38011682,38011683,38011682,38011682,38011681,38011682,38011683,38011683,38011683,38011682,38011681,38011680,38011681,38011682,38011683,38011682,38011681,38011680,38011681,38011681,38011680,38011681,38011682,38011681,38011681,38011680,38011681,38011681,38011681,38011680,38011680,38011681,38011680,38011679,38011679,38011680,38011681,38011680,38011679,38011679,38011679,38011678,38011679,38011678,38011678,38011678,38011677,38011678,38011678,38011678,38011679,38011678,38011679,38011680,38011679,38011679,38011678,38011677,38011677,38011677,38011677,38011677,38011676,38011677,38011678,38011677,38011677,38011677,38011677,38011676,38011676,38011677,38011678,38011677,38011676,38011676,38011675,38011674,38011673,38011674,38011673,38011674,38011675,38011676,38011675,38011674,38011673,38011673,38011672,38011673,38011672,38011672,38011673,38011674,38011675,38011675,38011674,38011675,38011675,38011674,38011673,38011674,38011675,38011675,38011676,38011675,38011675,38011674,38011673,38011672,38011671,38011671,38011670,38011669,38011670,38011670,38011670,38011671,38011671,38011670,38011670,38011670,38011671,38011670,38011671,38011672,38011671,38011670,38011670,38011669,38011668,38011667,38011667,38011666,38011665,38011666,38011665,38011664,38011663,38011663,38011663,38011664,38011665,38011664,38011664,38011664,38011665,38011666,38011667,38011666,38011665,38011664,38011665,38011665,38011664,38011663,38011662,38011662,38011661,38011662,38011661,38011660,38011661,38011660,38011661,38011660,38011659,38011660,38011660,38011661,38011661,38011661,38011662,38011661,38011661,38011662,38011663,38011662,38011662,38011662,38011662,38011661,38011660,38011661,38011661,38011660,38011659,38011658,38011659,38011659,38011660,38011661,38011660,38011659,38011660,38011661,38011661,38011660,38011659,38011659,38011658,38011657,38011657,38011657,38011656,38011655,38011654,38011653,38011652,38011652,38011651,38011652,38011651,38011652,38011652,38011653,38011652,38011653,38011654,38011653,38011652,38011652,38011651,38011651,38011651,38011650,38011649,38011650,38011649,38011648,38011648,38011648,38011648,38011649,38011648,38011647,38011646,38011645,38011645,38011644,38011644,38011645,38011644,38011643,38011644,38011644,38011643,38011644,38011645,38011646,38011647,38011646,38011646,38011646,38011647,38011646,38011647,38011646,38011645,38011645,38011644,38011643,38011644,38011643,38011643,38011642,38011642,38011642,38011643,38011643,38011643,38011642,38011643,38011643,38011643,38011643,38011644,38011643,38011642,38011642,38011643,38011643,38011642,38011642,38011642,38011643,38011644,38011643,38011642,38011643,38011643,38011644,38011645,38011646,38011647,38011646,38011647,38011648,38011649,38011648,38011647,38011647,38011648,38011649,38011650,38011651,38011650,38011651,38011651,38011652,38011651,38011650,38011651,38011652,38011652,38011652,38011651,38011651,38011652,38011651,38011652,38011652,38011652,38011652,38011653,38011652,38011652,38011651,38011651,38011651,38011651,38011651,38011652,38011652,38011651,38011651,38011652,38011653,38011652,38011652,38011653,38011652,38011652,38011651,38011651,38011650,38011649,38011648,38011648,38011649,38011649,38011648,38011648,38011647,38011646,38011645,38011646,38011645,38011646,38011645,38011644,38011643,38011642,38011642,38011643,38011644,38011643,38011643,38011644,38011644,38011645,38011644,38011644,38011643,38011644,38011644,38011643,38011643,38011643,38011642,38011641,38011640,38011639,38011639,38011638,38011638,38011638,38011637,38011636,38011635,38011636,38011635,38011634,38011634,38011634,38011633,38011633,38011634,38011633,38011633,38011633,38011632,38011631,38011631,38011630,38011629,38011629,38011628,38011629,38011630,38011629,38011629,38011629,38011628,38011627,38011626,38011625,38011626,38011625,38011624,38011625,38011625,38011625,38011626,38011625,38011624,38011624,38011624,38011623,38011624,38011625,38011624,38011625,38011624,38011623,38011623,38011624,38011623,38011623,38011623,38011623,38011623,38011624,38011625,38011626,38011625,38011624,38011624,38011624,38011624,38011625,38011624,38011624,38011624,38011624,38011624,38011625,38011625,38011625,38011626,38011626,38011627,38011626,38011626,38011627,38011626,38011627,38011627,38011627,38011626,38011626,38011626,38011626,38011625,38011624,38011623,38011622,38011623,38011623,38011623,38011624,38011625,38011625,38011624,38011625,38011626,38011625,38011624,38011624,38011625,38011626,38011626,38011627,38011627,38011626,38011625,38011625,38011626,38011627,38011627,38011626,38011627,38011628,38011627,38011628,38011629,38011629,38011630,38011631,38011632,38011633,38011633,38011634,38011635,38011636,38011635,38011634,38011635,38011635,38011634]
            ,20258
        ]
    ])('should return the correct total subarrays for nums = %p', (nums, expected) => {
        const result = continuousSubarrays(nums)
        expect(result).toBe(expected)
    })
});
