export const formatDateSlash = function(date) {
    date = String(date);

    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);

    // yyyy/mm/dd形式の文字列を返す
    return `${year}/${month}/${day}`;
};

export const formatDateHyphen = function(date) {
    date = String(date);

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

export const calculateAge = function(date) {
    date = String(date);

    const today = new Date();
    const birthYear = parseInt(date.substring(0, 4));
    const birthMonth = parseInt(date.substring(4, 6)) - 1; // 月は0から始まるため1を引く
    const birthDay = parseInt(date.substring(6, 8));
    
    const dateObj = new Date(birthYear, birthMonth, birthDay);
    
    let age = today.getFullYear() - dateObj.getFullYear();
    const monthDiff = today.getMonth() - dateObj.getMonth();
    
    // 生年月日が現在の日付よりも未来の場合、年齢を1つ引く
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateObj.getDate())) {
        age--;
    }
    
    return age;
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