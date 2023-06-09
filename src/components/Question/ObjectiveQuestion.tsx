"use client";

import Question from "@/constants/Question";
import useSurvey from "@/store/SurveyStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../Form/Form";
import { Input } from "../Input/Input";

interface QuestionProps {
  question: Question;
  index: number;
  allowEdit?: boolean;
}

export const ObjectiveQuestion: React.FC<QuestionProps> = ({
  question,
  index,
  allowEdit,
}) => {
  const { updateQuestion, loading, getSurvey } = useSurvey();
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const formSchema = z.object({
    text: z.string().min(5).max(100),
    option1: z.string().min(3),
    option2: z.string().min(3),
    option3: z.string().min(3),
    option4: z.string().min(3),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: question.text,
      option1: question.options?.at(0),
      option2: question.options?.at(1),
      option3: question.options?.at(2),
      option4: question.options?.at(3),
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    updateQuestion(
      {
        text: values.text,
        type: "OPTION",
        index: question.index,
        options: [
          values.option1,
          values.option2,
          values.option3,
          values.option4,
        ],
        surveySlug: question.surveySlug,
      },
      () => {
        setIsEditMode(false);
        setShowEditButton(false);
        getSurvey(question.surveySlug!);
      }
    );
  };

  return (
    <div
      className="px-6 py-4 rounded bg-card relative"
      onMouseEnter={() => {
        if (!isEditMode) {
          setShowEditButton(true);
        }
      }}
      onMouseLeave={() => {
        if (!isEditMode) {
          setShowEditButton(false);
        }
      }}
      onClick={() => {
        if (!isEditMode) {
          setIsEditMode(true);
        }
      }}
    >
      {/* <span>{index + 3}. </span> */}
      {allowEdit && isEditMode ? (
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                <FormField
                  control={form.control}
                  name="option1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="option2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="option3"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="option4"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setIsEditMode(false);
                    setShowEditButton(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <div>
          {allowEdit && showEditButton && (
            <div className="absolute top-3 right-3">
              <Button variant="outline">
                <Edit size={16} className="mr-2" /> Edit
              </Button>
            </div>
          )}
          <div
            className={`
					${allowEdit && showEditButton && "opacity-50"}  
					`}
          >
            <p className="mb-2">{question.text}</p>
            <div className="grid grid-cols-2 gap-2">
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    disabled
                    type="radio"
                    // name={question.index.toString()}
                    value={option}
                  />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
