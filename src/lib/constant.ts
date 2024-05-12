export const steps = [
    {
        id: 'welcome',
        message: 'Hey there! Welcome to ShopBot. What would you like to buy today?',
        trigger: 'select_product'
    },
    {
        id: 'select_product',
        options: [
            { value: 'shirts', label: 'Shirts', trigger: 'select_size_shirts' },
            { value: 'jeans', label: 'Jeans', trigger: 'select_size_jeans' },
        ],
    },
    {
        id: 'select_size_shirts',
        message: 'Great choice! What size do you need?',
        trigger: 'size_options_shirts'
    },
    {
        id: 'size_options_shirts',
        options: [
            { value: 'S', label: 'Small', trigger: 'select_color_shirts' },
            { value: 'M', label: 'Medium', trigger: 'select_color_shirts' },
            { value: 'L', label: 'Large', trigger: 'select_color_shirts' },
        ],
        metadata: { product: 'Shirts' } // Store the selected product in metadata
    },
    {
        id: 'select_size_jeans',
        message: 'Awesome! What size do you need?',
        trigger: 'size_options_jeans'
    },
    {
        id: 'size_options_jeans',
        options: [
            { value: '28', label: '28', trigger: 'select_color_jeans' },
            { value: '30', label: '30', trigger: 'select_color_jeans' },
            { value: '32', label: '32', trigger: 'select_color_jeans' },
        ],
        metadata: { product: 'Jeans' } // Store the selected product in metadata
    },
    {
        id: 'select_color_shirts',
        message: 'Nice! What color would you like?',
        trigger: 'color_options',
    },
    {
        id: 'select_color_jeans',
        message: 'Cool! What color would you like?',
        trigger: 'color_options',
    },
    {
        id: 'color_options',
        options: [
            { value: 'red', label: 'Red', trigger: 'confirm_order' },
            { value: 'blue', label: 'Blue', trigger: 'confirm_order' },
            { value: 'green', label: 'Green', trigger: 'confirm_order' },
        ],
        metadata: { product: 'Colors' } // Store the selected product in metadata
    },
    {
        id: 'confirm_order',
        message: ({ previousValue, steps }: any) => {

            const { product } = steps.size_options_shirts?.metadata || steps.size_options_jeans?.metadata;
            const size = steps.size_options_shirts?.value || steps.size_options_jeans?.value;
            const color = steps.color_options.value;
            return `You have selected ${size} ${color} ${product}.`;

        },
        end: true,
    },
]
