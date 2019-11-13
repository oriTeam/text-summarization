<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <a-table
                        :columns="columns"
                        :rowKey="record => record.no"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <!--<template slot="name" slot-scope="name">-->
                    <!--{{name.first}} {{name.last}}-->
                    <!--</template>-->
                </a-table>
            </div>
        </div>
    </div>
</template>
<script>

    const columns = [
        {
            title: 'STT',
            dataIndex: 'no',
            // sorter: true,
            width: '10%',
            // scopedSlots: {customRender: 'name'},
        },
        {
            title: 'Plain text',
            dataIndex: 'original_text',
            // filters: [{text: 'Male', value: 'male'}, {text: 'Female', value: 'female'}],
            // sorter: true,
            width: '60%',
        },
        {
            title: 'Summaried text',
            dataIndex: 'summary_result',
            // sorter: true,
            width: '30%',
        },
    ];

    export default {
        mounted() {
            this.fetch();
        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
            };
        },
        methods: {
            handleTableChange(pagination, filters, sorter) {
                console.log(pagination);
                // const pager = {...this.pagination};
                // pager.current = pagination.current;
                // this.pagination = pager;
                // this.fetch({
                //     results: pagination.pageSize,
                //     page: pagination.current,
                //     sortField: sorter.field,
                //     sortOrder: sorter.order,
                //     ...filters,
                // });
            },
            fetch(params = {}) {
                // console.log('params:', params);
                this.loading = true;
                const pagination = {...this.pagination};
                if (!localStorage.getItem("shistory")) {
                    console.log('empty');
                } else {
                    let histories = JSON.parse(localStorage.getItem("shistory"));
                    const data = histories.map((history, index) => {
                        return {
                            no: index + 1,
                            original_text: history.original_text,
                            summary_result: history.summary_result
                        }
                    });
                    this.data = data;
                    pagination.total = data.length;
                    pagination.pageSize = 10;

                    this.loading = false;
                }
            },
        },
    };
</script>
