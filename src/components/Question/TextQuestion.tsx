"use client";

import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../Form/Form";
import { Input } from "../Input/Input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { Edit } from "lucide-react";
import Question from "@/constants/Question";
import useSurvey from "@/store/SurveyStore";

interface QuestionProps {
  question: Question;
  index: number;
  allowEdit?: boolean;
}

export const TextQuestion: React.FC<QuestionProps> = ({
  question,
  index,
  allowEdit,
}) => {
  const { updateQuestion, loading, deleteQuestion, getSurvey } = useSurvey();
  const [isEditMode, setIsEditMode] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const formSchema = z.object({
    text: z.string().min(5).max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: question.text,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    updateQuestion(
      {
        text: values.text,
        type: "TEXT",
        index: question.index,
        options: [],
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
      className="px-6 py-4 rounded-sm bg-white border-2 border-slate-200 relative"
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
      {/* <span className="mt-2">{index + 1}. </span> */}
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
                      <Input disabled={loading} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center mt-4">
                <Button
                  variant="secondary"
                  onClick={() => {
                    form.reset();
                    // deleteQuestion(question, () => {

                    //   getSurvey(question.surveySlug!);
                    // });
                    setIsEditMode(false);
                    setShowEditButton(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      ) : (
        <div>
          {allowEdit && showEditButton && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
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
            <p>{question.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
