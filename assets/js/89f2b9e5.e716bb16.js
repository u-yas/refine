"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"useStepsForm",title:"useStepsForm"},l=void 0,p={unversionedId:"api-reference/mantine/hooks/form/useStepsForm",id:"api-reference/mantine/hooks/form/useStepsForm",title:"useStepsForm",description:"useStepsForm allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc.",source:"@site/docs/api-reference/mantine/hooks/form/useStepsForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useStepsForm",permalink:"/docs/api-reference/mantine/hooks/form/useStepsForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/hooks/form/useStepsForm.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1674038087,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{id:"useStepsForm",title:"useStepsForm"},sidebar:"someSidebar",previous:{title:"useModalForm",permalink:"/docs/api-reference/mantine/hooks/form/useModalForm"},next:{title:"useSelect",permalink:"/docs/api-reference/mantine/hooks/useSelect"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Create Form",id:"create-form",level:3},{value:"Edit Form",id:"edit-form",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Example",id:"example",level:2}],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used in both."),(0,a.kt)("p",null,"Let's create our ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component to redirect to create and edit pages."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"PostList"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import React from "react";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { GetManyResponse, useMany } from "@pankod/refine-core";\nimport {\n    Box,\n    Group,\n    List,\n    ScrollArea,\n    Select,\n    Table,\n    Pagination,\n    EditButton,\n    DeleteButton,\n    DateField,\n} from "@pankod/refine-mantine";\n\nimport { ColumnFilter, ColumnSorter } from "../../components/table";\nimport { FilterElementProps, ICategory, IPost } from "../../interfaces";\n\nexport const PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n                meta: {\n                    filterOperator: "contains",\n                },\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n                meta: {\n                    filterElement: function render(props: FilterElementProps) {\n                        return (\n                            <Select\n                                defaultValue="published"\n                                data={[\n                                    { label: "Published", value: "published" },\n                                    { label: "Draft", value: "draft" },\n                                    { label: "Rejected", value: "rejected" },\n                                ]}\n                                {...props}\n                            />\n                        );\n                    },\n                    filterOperator: "eq",\n                },\n            },\n            {\n                id: "category.id",\n                header: "Category",\n                enableColumnFilter: false,\n                accessorKey: "category.id",\n                cell: function render({ getValue, table }) {\n                    const meta = table.options.meta as {\n                        categoriesData: GetManyResponse<ICategory>;\n                    };\n                    const category = meta.categoriesData?.data.find(\n                        (item) => item.id === getValue(),\n                    );\n                    return category?.title ?? "Loading...";\n                },\n            },\n            {\n                id: "createdAt",\n                header: "Created At",\n                accessorKey: "createdAt",\n                cell: function render({ getValue }) {\n                    return (\n                        <DateField value={getValue() as string} format="LLL" />\n                    );\n                },\n                enableColumnFilter: false,\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                enableColumnFilter: false,\n                enableSorting: false,\n                cell: function render({ getValue }) {\n                    return (\n                        <Group spacing="xs" noWrap>\n                            <EditButton\n                                hideText\n                                recordItemId={getValue() as number}\n                            />\n                            <DeleteButton\n                                hideText\n                                recordItemId={getValue() as number}\n                            />\n                        </Group>\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        setOptions,\n        refineCore: {\n            setCurrent,\n            pageCount,\n            current,\n            tableQueryResult: { data: tableData },\n        },\n    } = useTable({\n        columns,\n    });\n\n    const categoryIds = tableData?.data?.map((item) => item.category.id) ?? [];\n    const { data: categoriesData } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    setOptions((prev) => ({\n        ...prev,\n        meta: {\n            ...prev.meta,\n            categoriesData,\n        },\n    }));\n\n    return (\n        <ScrollArea>\n            <List>\n                <Table highlightOnHover>\n                    <thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => {\n                                    return (\n                                        <th key={header.id}>\n                                            {!header.isPlaceholder && (\n                                                <Group spacing="xs" noWrap>\n                                                    <Box>\n                                                        {flexRender(\n                                                            header.column\n                                                                .columnDef\n                                                                .header,\n                                                            header.getContext(),\n                                                        )}\n                                                    </Box>\n                                                    <Group spacing="xs" noWrap>\n                                                        <ColumnSorter\n                                                            column={\n                                                                header.column\n                                                            }\n                                                        />\n                                                        <ColumnFilter\n                                                            column={\n                                                                header.column\n                                                            }\n                                                        />\n                                                    </Group>\n                                                </Group>\n                                            )}\n                                        </th>\n                                    );\n                                })}\n                            </tr>\n                        ))}\n                    </thead>\n                    <tbody>\n                        {getRowModel().rows.map((row) => {\n                            return (\n                                <tr key={row.id}>\n                                    {row.getVisibleCells().map((cell) => {\n                                        return (\n                                            <td key={cell.id}>\n                                                {flexRender(\n                                                    cell.column.columnDef.cell,\n                                                    cell.getContext(),\n                                                )}\n                                            </td>\n                                        );\n                                    })}\n                                </tr>\n                            );\n                        })}\n                    </tbody>\n                </Table>\n                <br />\n                <Pagination\n                    position="right"\n                    total={pageCount}\n                    page={current}\n                    onChange={setCurrent}\n                />\n            </List>\n        </ScrollArea>\n    );\n};\n')))),(0,a.kt)("h3",{id:"create-form"},"Create Form"),(0,a.kt)("p",null,"In this component you can see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used to manage the steps and form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'import {\n    Button,\n    Code,\n    Create,\n    Group,\n    Select,\n    Stepper,\n    TextInput,\n    useStepsForm,\n    SaveButton,\n    Text,\n} from "@pankod/refine-mantine";\nimport { RichTextEditor } from "@mantine/rte";\nimport { DatePicker } from "@mantine/dates";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        getInputProps,\n        values,\n        steps: { currentStep, gotoStep },\n    } = useStepsForm({\n        initialValues: {\n            title: "",\n            status: "",\n            slug: "",\n            createdAt: new Date(),\n            content: "",\n        },\n        validate: (values) => {\n            // validation for each step\n            if (currentStep === 0) {\n                return {\n                    title: values.title ? null : "Title is required",\n                    slug: values.slug ? null : "Slug is required",\n                };\n            }\n\n            if (currentStep === 1) {\n                return {\n                    status: values.status ? null : "Status is required",\n                    createdAt: values.createdAt\n                        ? null\n                        : "CreatedAt is required",\n                };\n            }\n\n            return {};\n        },\n    });\n\n    return (\n        <Create\n            // Next, previous and save buttons\n            footerButtons={\n                <Group position="right" mt="xl">\n                    {currentStep !== 0 && (\n                        <Button\n                            variant="default"\n                            onClick={() => gotoStep(currentStep - 1)}\n                        >\n                            Back\n                        </Button>\n                    )}\n                    {currentStep !== 3 && (\n                        <Button onClick={() => gotoStep(currentStep + 1)}>\n                            Next step\n                        </Button>\n                    )}\n                    {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n                </Group>\n            }\n        >\n            <Stepper active={currentStep} breakpoint="sm">\n                <Stepper.Step label="First Step">\n                    <TextInput\n                        mt="md"\n                        label="Title"\n                        placeholder="Title"\n                        {...getInputProps("title")}\n                    />\n                    <TextInput\n                        mt="md"\n                        label="Slug"\n                        placeholder="Slug"\n                        {...getInputProps("slug")}\n                    />\n                </Stepper.Step>\n\n                <Stepper.Step label="Second Step">\n                    <Select\n                        mt="md"\n                        label="Status"\n                        placeholder="Pick one"\n                        {...getInputProps("status")}\n                        data={[\n                            { label: "Published", value: "published" },\n                            { label: "Draft", value: "draft" },\n                            { label: "Rejected", value: "rejected" },\n                        ]}\n                    />\n\n                    <DatePicker\n                        mt="md"\n                        label="CreatedAt"\n                        placeholder="CreatedAt"\n                        {...getInputProps("createdAt")}\n                    />\n                </Stepper.Step>\n\n                <Stepper.Step label="Final Step">\n                    <Text mt={8} weight={500} size="sm" color="#212529">\n                        Content\n                    </Text>\n                    <RichTextEditor\n                        sx={{ minHeight: 300 }}\n                        {...getInputProps("content")}\n                    />\n                </Stepper.Step>\n                <Stepper.Completed>\n                    Completed! Form values:\n                    <Code block mt="xl">\n                        {JSON.stringify(values, null, 2)}\n                    </Code>\n                </Stepper.Completed>\n            </Stepper>\n        </Create>\n    );\n};\n')),(0,a.kt)("h3",{id:"edit-form"},"Edit Form"),(0,a.kt)("p",null,"Magic, ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostCreate>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostEdit>")," pages are almost the same. So how are the form's default values set? ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," does this with te ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," parameter it reads from the URL and fetches the data from the server."),(0,a.kt)("p",null,"You can change the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as you want with the ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," that comes out of ",(0,a.kt)("inlineCode",{parentName:"p"},"refineCore"),"."),(0,a.kt)("p",null,"Another part that is different from ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostCreate>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostEdit>")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DatePicker")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'import {\n    Button,\n    Code,\n    Edit,\n    Group,\n    Select,\n    Stepper,\n    TextInput,\n    useStepsForm,\n    SaveButton,\n    Text,\n    Space,\n} from "@pankod/refine-mantine";\nimport { RichTextEditor } from "@mantine/rte";\nimport { DatePicker } from "@mantine/dates";\nimport dayjs from "dayjs";\n\nexport const PostEdit: React.FC = () => {\n    const {\n        saveButtonProps,\n        getInputProps,\n        values,\n        steps: { currentStep, gotoStep },\n    } = useStepsForm({\n        initialValues: {\n            title: "",\n            status: "",\n            slug: "",\n            createdAt: new Date(),\n            content: "",\n        },\n        validate: (values) => {\n            // validation for each step\n            if (currentStep === 0) {\n                return {\n                    title: values.title ? null : "Title is required",\n                    status: values.status ? null : "Status is required",\n                };\n            }\n\n            if (currentStep === 1) {\n                return {\n                    slug: values.slug ? null : "Slug is required",\n                    createdAt: values.createdAt\n                        ? null\n                        : "CreatedAt is required",\n                };\n            }\n\n            return {};\n        },\n    });\n\n    return (\n        <Edit\n            // Next, previous and save buttons\n            footerButtons={\n                <Group position="right" mt="xl">\n                    {currentStep !== 0 && (\n                        <Button\n                            variant="default"\n                            onClick={() => gotoStep(currentStep - 1)}\n                        >\n                            Back\n                        </Button>\n                    )}\n                    {currentStep !== 3 && (\n                        <Button onClick={() => gotoStep(currentStep + 1)}>\n                            Next step\n                        </Button>\n                    )}\n                    {currentStep === 2 && <SaveButton {...saveButtonProps} />}\n                </Group>\n            }\n        >\n            <Stepper active={currentStep} breakpoint="sm">\n                <Stepper.Step label="First Step">\n                    <TextInput\n                        mt="md"\n                        label="Title"\n                        placeholder="Title"\n                        {...getInputProps("title")}\n                    />\n                    <TextInput\n                        mt="md"\n                        label="Slug"\n                        placeholder="Slug"\n                        {...getInputProps("slug")}\n                    />\n                </Stepper.Step>\n\n                <Stepper.Step label="Second Step">\n                    <Select\n                        mt="md"\n                        label="Status"\n                        placeholder="Pick one"\n                        {...getInputProps("status")}\n                        data={[\n                            { label: "Published", value: "published" },\n                            { label: "Draft", value: "draft" },\n                            { label: "Rejected", value: "rejected" },\n                        ]}\n                    />\n\n                    <DatePicker\n                        mt="md"\n                        label="CreatedAt"\n                        placeholder="CreatedAt"\n                        {...getInputProps("createdAt")}\n                        value={dayjs(values.createdAt).toDate()}\n                    />\n                </Stepper.Step>\n\n                <Stepper.Step label="Final Step">\n                    <Text mt={8} weight={500} size="sm" color="#212529">\n                        Content\n                    </Text>\n                    <RichTextEditor {...getInputProps("content")} />\n                </Stepper.Step>\n                <Stepper.Completed>\n                    Completed! Form values:\n                    <Code block mt="xl">\n                        {JSON.stringify(values, null, 2)}\n                    </Code>\n                </Stepper.Completed>\n            </Stepper>\n        </Edit>\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stepsProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the steps"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#stepspropstype"},(0,a.kt)("inlineCode",{parentName:"a"},"StepsPropsType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," properties"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"stepspropstype"},"StepsPropsType"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to set the initial step"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isBackValidate"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to validation the current step when going back."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")))))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"steps"),(0,a.kt)("td",{parentName:"tr",align:null},"Relevant state and method to control the steps"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#stepsreturnvalues"},(0,a.kt)("inlineCode",{parentName:"a"},"StepsReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,a.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"stepsreturnvalues"},"StepsReturnValues"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Current step"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gotoStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to go to a specific step."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(step: number) => void")))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(u,{path:"form-mantine-use-steps-form",mdxType:"CodeSandboxExample"}))}c.isMDXComponent=!0}}]);