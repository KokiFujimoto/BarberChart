export const formatDateSlash = function(date) {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);

    // yyyy/mm/dd形式の文字列を返す
    return `${year}/${month}/${day}`;
};

export const formatDateHyphen =  function(date) {
    // 年、月、日の部分を取得して '-' を挿入する
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);

    // yyyy-mm-dd 形式の文字列を返す
    return `${year}-${month}-${day}`;
}

export const formatDate =  function(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
}

export const occupations = [
    {
        value: 0,
        title: '全て',
    },
    {
        value: 1,
        title: '会社員',
    },
    {
        value: 2,
        title: '学生',
    },
    {
        value: 3,
        title: '農家',
    },
    {
        value: 4,
        title: '漁師',
    },
];

export const ages = [
    {
        value: 0,
        title: '全て',
    },
    {
        value: 1,
        title: '10代未満',
    },
    {
        value: 2,
        title: '10代',
    },
    {
        value: 3,
        title: '20代',
    },
    {
        value: 4,
        title: '30代',
    },
    {
        value: 5,
        title: '40代',
    },
    {
        value: 6,
        title: '50代',
    },
    {
        value: 7,
        title: '60代',
    },
    {
        value: 8,
        title: '70代',
    },
    {
        value: 9,
        title: '80代',
    },
    {
        value: 10,
        title: '90代以上',
    },
];