import inquirer from "inquirer";

type QuestionKey = "question";
const Inquirer = inquirer.createPromptModule();
type InquirerAnswer<Answer> = {
    [Key in QuestionKey]: Answer;
};

export function prompt<Answer>(params: inquirer.DistinctQuestion<InquirerAnswer<Answer>>): Promise<Answer> {
    return Inquirer<InquirerAnswer<Answer>>({
        name: "question",
        ...params,
    }).then((_) => _.question);
}
