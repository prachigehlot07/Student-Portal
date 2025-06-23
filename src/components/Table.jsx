export default function Table() {
    return (
        <div class="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white p-8">

            <div class="max-w-5xl mx-auto">
                <h1 class="text-3xl font-bold mb-6 text-center">Semester 4 Result</h1>

                <div className="overflow-x-auto mt-8 w-full">

                    <table class="min-w-full table-auto border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl overflow-hidden">
                        <thead class="bg-gray-200 dark:bg-gray-700">
                            <tr>
                                <th class="px-4 py-3 text-left font-semibold">Subject</th>
                                <th class="px-4 py-3">Practical (15)</th>
                                <th class="px-4 py-3">Project (10)</th>
                                <th class="px-4 py-3">Mid Sem (15)</th>
                                <th class="px-4 py-3">End Sem (60)</th>
                                <th class="px-4 py-3">Total (100)</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
                            <tr>
                                <td class="px-4 py-3">DSA</td>
                                <td class="px-4 py-3 text-center">12</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">12</td>
                                <td class="px-4 py-3 text-center">56</td>
                                <td class="px-4 py-3 text-center">90</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3">OS</td>
                                <td class="px-4 py-3 text-center">15</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">14</td>
                                <td class="px-4 py-3 text-center">51</td>
                                <td class="px-4 py-3 text-center">90</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3">COA</td>
                                <td class="px-4 py-3 text-center">15</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">15</td>
                                <td class="px-4 py-3 text-center">55</td>
                                <td class="px-4 py-3 text-center">95</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3">DBMS</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">50</td>
                                <td class="px-4 py-3 text-center">80</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3">OOP</td>
                                <td class="px-4 py-3 text-center">15</td>
                                <td class="px-4 py-3 text-center">10</td>
                                <td class="px-4 py-3 text-center">12</td>
                                <td class="px-4 py-3 text-center">45</td>
                                <td class="px-4 py-3 text-center">82</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}